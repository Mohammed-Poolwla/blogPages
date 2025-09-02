// Backfill categories and tags from existing blogs
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load env before initializing DB
const envLocalPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath });
} else {
  dotenv.config();
}

if (!process.env.POSTGRES_URL) {
  console.error('Missing POSTGRES_URL. Set it in .env or .env.local or export it in your shell.');
  process.exit(1);
}

const { db, BlogsTable, CategoriesTable, TagsTable, BlogCategoriesTable, BlogTagsTable } = require('../lib/db');
const { eq } = require('drizzle-orm');
const { sql } = require('@vercel/postgres');

// Optional AI mode and CLI args
const ARGS = process.argv.slice(2);
const USE_AI = ARGS.includes('--ai');

function getArg(name, defaultValue = null) {
  const flag = `--${name}`;
  const idx = ARGS.findIndex((a) => a === flag || a.startsWith(`${flag}=`));
  if (idx === -1) return defaultValue;
  const current = ARGS[idx];
  if (current.includes('=')) {
    return current.split('=').slice(1).join('=');
  }
  const next = ARGS[idx + 1];
  if (next && !next.startsWith('--')) return next;
  return true;
}

const LIMIT = parseInt(getArg('limit', '0'), 10) || 0;
const OFFSET = parseInt(getArg('offset', '0'), 10) || 0;
const ONLY_EMPTY = ARGS.includes('--only-empty');
const LOG_EVERY = Math.max(1, parseInt(getArg('log-every', '10'), 10) || 10);
const SKIP_ENSURE = ARGS.includes('--skip-ensure');
const DB_RETRIES = Math.max(1, parseInt(getArg('db-retries', '5'), 10) || 5);
const DB_RETRY_BASE = Math.max(100, parseInt(getArg('db-retry-base', '500'), 10) || 500);
const ONLY_MISSING_TOPIC = ARGS.includes('--only-missing-topic');
const ONLY_MISSING_TAGS = ARGS.includes('--only-missing-tags');
const PRESERVE_KEYWORDS = ARGS.includes('--preserve-keywords');

let openai = null;
if (USE_AI) {
  if (!process.env.OPENAI_API_KEY) {
    console.error('Missing OPENAI_API_KEY. Set it in .env or .env.local when using --ai mode.');
    process.exit(1);
  }
  try {
    const OpenAI = require('openai');
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  } catch (e) {
    console.error('Failed to initialize OpenAI client:', e.message);
    process.exit(1);
  }
}

async function ensureTables() {
  // Create categories
  await sql`CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE
  );`;
  // Create tags
  await sql`CREATE TABLE IF NOT EXISTS tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE
  );`;
  // Create blog_categories
  await sql`CREATE TABLE IF NOT EXISTS blog_categories (
    id SERIAL PRIMARY KEY,
    blog_id INTEGER,
    category_id INTEGER,
    CONSTRAINT unique_blog_category_idx UNIQUE (blog_id, category_id)
  );`;
  // Create blog_tags
  await sql`CREATE TABLE IF NOT EXISTS blog_tags (
    id SERIAL PRIMARY KEY,
    blog_id INTEGER,
    tag_id INTEGER,
    CONSTRAINT unique_blog_tag_idx UNIQUE (blog_id, tag_id)
  );`;
}

async function withRetry(fn, { attempts = 5, baseMs = 500 } = {}) {
  let lastErr;
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      const delay = Math.min(10000, baseMs * 2 ** (i - 1));
      console.warn(`Operation failed (attempt ${i}/${attempts}): ${e.message || e}. Retrying in ${delay}ms...`);
      await new Promise((res) => setTimeout(res, delay));
    }
  }
  throw lastErr;
}

async function ensureCategory(name) {
  if (!name || !name.trim()) return null;
  const trimmed = name.trim();
  // Try find
  const existing = await db.select().from(CategoriesTable).where(eq(CategoriesTable.name, trimmed)).limit(1);
  if (existing && existing[0]) return existing[0];
  // Create
  const inserted = await db.insert(CategoriesTable).values({ name: trimmed }).returning();
  return inserted[0];
}

async function ensureTag(name) {
  if (!name || !name.trim()) return null;
  const trimmed = name.trim();
  const existing = await db.select().from(TagsTable).where(eq(TagsTable.name, trimmed)).limit(1);
  if (existing && existing[0]) return existing[0];
  const inserted = await db.insert(TagsTable).values({ name: trimmed }).returning();
  return inserted[0];
}

async function linkBlogCategory(blogId, categoryId) {
  if (!blogId || !categoryId) return;
  try {
    await db.insert(BlogCategoriesTable).values({ blogId, categoryId });
  } catch (e) {
    // likely unique violation, ignore
  }
}

async function linkBlogTag(blogId, tagId) {
  if (!blogId || !tagId) return;
  try {
    await db.insert(BlogTagsTable).values({ blogId, tagId });
  } catch (e) {
    // likely unique violation, ignore
  }
}

function parseTags(keywords) {
  if (!keywords) return [];
  return keywords
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function countWords(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function normalizeName(raw, { asCategory }) {
  if (!raw) return null;
  let s = String(raw).replace(/[\s\t\n\r]+/g, ' ').trim();
  // Remove leading/trailing punctuation
  s = s.replace(/^[-–—•.,;:]+/, '').replace(/[-–—•.,;:]+$/, '').trim();
  if (!s) return null;
  const words = countWords(s);
  if (words < 1 || words > 5) return null;
  // Keep categories title-cased for readability; tags lower-case
  s = asCategory ? toTitleCase(s) : s.toLowerCase();
  // Collapse multiple spaces
  s = s.replace(/\s{2,}/g, ' ').trim();
  return s || null;
}

function buildAnalysis(blogs) {
  const categoryFreq = new Map();
  const tagFreq = new Map();

  for (const b of blogs) {
    const cat = normalizeName(b.topic, { asCategory: true });
    if (cat) categoryFreq.set(cat, (categoryFreq.get(cat) || 0) + 1);
    const tags = parseTags(b.keywords)
      .map((t) => normalizeName(t, { asCategory: false }))
      .filter(Boolean);
    for (const t of tags) tagFreq.set(t, (tagFreq.get(t) || 0) + 1);
  }

  const categories = Array.from(categoryFreq.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }));
  const tags = Array.from(tagFreq.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }));

  return { categories, tags };
}

async function run() {
  const DRY_RUN = process.argv.includes('--dry-run');
  console.log(USE_AI ? 'Starting AI-driven categorization and tagging...' : 'Starting analysis of categories and tags...');
  console.log(`Options: limit=${LIMIT || 'all'}, offset=${OFFSET}, only-empty=${ONLY_EMPTY ? 'yes' : 'no'}, only-missing-topic=${ONLY_MISSING_TOPIC ? 'yes' : 'no'}, only-missing-tags=${ONLY_MISSING_TAGS ? 'yes' : 'no'}, preserve-keywords=${PRESERVE_KEYWORDS ? 'yes' : 'no'}, log-every=${LOG_EVERY}, skip-ensure=${SKIP_ENSURE ? 'yes' : 'no'}, db-retries=${DB_RETRIES}, db-retry-base=${DB_RETRY_BASE}ms`);
  if (!SKIP_ENSURE) {
    await withRetry(() => ensureTables(), { attempts: DB_RETRIES, baseMs: DB_RETRY_BASE });
  }
  // Lightweight connectivity ping
  await withRetry(() => sql`select 1`, { attempts: DB_RETRIES, baseMs: DB_RETRY_BASE });

  const blogs = await withRetry(() => {
    let q = db.select().from(BlogsTable);
    if (LIMIT > 0 && typeof q.limit === 'function') q = q.limit(LIMIT);
    if (OFFSET > 0 && typeof q.offset === 'function') q = q.offset(OFFSET);
    return q;
  }, { attempts: DB_RETRIES, baseMs: DB_RETRY_BASE });

  if (!USE_AI) {
    const { categories, tags } = buildAnalysis(blogs);

    console.log(`\nCandidate categories (${categories.length}):`);
    console.log(categories.slice(0, 50).map((c) => `${c.name} (${c.count})`).join(', '));
    if (categories.length > 50) console.log(`...and ${categories.length - 50} more`);

    console.log(`\nTop tags (${tags.length}):`);
    console.log(tags.slice(0, 100).map((t) => `${t.name} (${t.count})`).join(', '));
    if (tags.length > 100) console.log(`...and ${tags.length - 100} more`);

    if (DRY_RUN) {
      console.log('\nDry run complete. No DB writes performed.');
      return;
    }

    console.log('\nWriting categories and tags to DB and linking to blogs...');
    // Create categories and tags catalog entries
    const categoryNameToId = new Map();
    for (const c of categories) {
      const cat = await ensureCategory(c.name);
      if (cat) categoryNameToId.set(c.name, cat.id);
    }
    const tagNameToId = new Map();
    for (const t of tags) {
      const tag = await ensureTag(t.name);
      if (tag) tagNameToId.set(t.name, tag.id);
    }

    // Link per blog
    let processed = 0;
    let skipped = 0;
    for (const blog of blogs) {
      if (ONLY_EMPTY && ((blog.topic && blog.topic.trim()) || (blog.keywords && blog.keywords.trim()))) {
        skipped += 1;
        continue;
      }
      if (ONLY_MISSING_TOPIC && (blog.topic && blog.topic.trim())) {
        skipped += 1;
        continue;
      }
      if (ONLY_MISSING_TAGS && (blog.keywords && blog.keywords.trim())) {
        skipped += 1;
        continue;
      }
      // Category: prefer normalized topic; otherwise pick highest-frequency tag that also exists as a category
      let catName = normalizeName(blog.topic, { asCategory: true });
      if (!catName && blog.keywords) {
        const blogTags = parseTags(blog.keywords)
          .map((t) => normalizeName(t, { asCategory: false }))
          .filter(Boolean);
        // choose tag with highest global count if it exists as category
        let best = null;
        let bestCount = -1;
        for (const t of blogTags) {
          const tAsCat = toTitleCase(t);
          const catCandidate = categories.find((c) => c.name === tAsCat);
          if (catCandidate && catCandidate.count > bestCount) {
            best = tAsCat;
            bestCount = catCandidate.count;
          }
        }
        if (best) catName = best;
      }
      if (catName && categoryNameToId.has(catName)) {
        await linkBlogCategory(blog.id, categoryNameToId.get(catName));
      }

      // Tags: use normalized keywords; optionally limit to top N per blog for quality
      const blogTags = parseTags(blog.keywords)
        .map((t) => normalizeName(t, { asCategory: false }))
        .filter(Boolean);
      // Sort tags by global frequency desc and take up to 10
      blogTags.sort((a, b) => (tags.find((t) => t.name === b)?.count || 0) - (tags.find((t) => t.name === a)?.count || 0));
      const limited = blogTags.slice(0, 10);
      for (const t of limited) {
        const tagId = tagNameToId.get(t);
        if (tagId) await linkBlogTag(blog.id, tagId);
      }

      processed += 1;
      if (processed % LOG_EVERY === 0) console.log(`Linked ${processed}/${blogs.length} (skipped ${skipped})`);
    }
    console.log(`Backfill complete. Linked ${processed} blogs. Skipped ${skipped}.`);
    return;
  }

  // AI-driven path
  console.log('\nUsing OpenAI to suggest categories and tags.');
  const categoryNameToId = new Map();
  const tagNameToId = new Map();

  async function getCategoryIdByName(name) {
    if (!name) return null;
    if (categoryNameToId.has(name)) return categoryNameToId.get(name);
    const cat = await ensureCategory(name);
    if (cat) categoryNameToId.set(name, cat.id);
    return cat ? cat.id : null;
  }
  async function getTagIdByName(name) {
    if (!name) return null;
    if (tagNameToId.has(name)) return tagNameToId.get(name);
    const tag = await ensureTag(name);
    if (tag) tagNameToId.set(name, tag.id);
    return tag ? tag.id : null;
  }

  async function aiSuggestForBlog(blog) {
    const title = blog.title || '';
    const description = blog.description || '';
    const content = (blog.content || '').slice(0, 4000);
    const prompt = [
      'You are a taxonomy assistant. Analyze the blog and return JSON.',
      'Rules:',
      '- categories: 1 to 2 items, each 1-5 words, title case',
      '- tags: 5 to 12 items, each 1-5 words, lowercase',
      '- Avoid duplicates; avoid generic tags like "blog", "general"',
      '- Use relevant, specific terms',
      '',
      'Return JSON with keys: categories (array of strings), tags (array of strings).',
      '',
      `Title: ${title}`,
      `Description: ${description}`,
      `Content: ${content}`
    ].join('\n');

    try {
      const resp = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You respond with strict JSON only.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.2,
        response_format: { type: 'json_object' },
      });
      const text = resp.choices?.[0]?.message?.content || '{}';
      let json;
      try { json = JSON.parse(text); } catch (e) { json = {}; }
      let categoriesOut = Array.isArray(json.categories) ? json.categories : [];
      let tagsOut = Array.isArray(json.tags) ? json.tags : [];
      // Normalize and filter
      categoriesOut = categoriesOut
        .map((c) => normalizeName(c, { asCategory: true }))
        .filter(Boolean);
      // de-dup
      categoriesOut = Array.from(new Set(categoriesOut));
      // limit
      categoriesOut = categoriesOut.slice(0, 2);

      tagsOut = tagsOut
        .map((t) => normalizeName(t, { asCategory: false }))
        .filter(Boolean);
      tagsOut = Array.from(new Set(tagsOut)).slice(0, 12);

      return { categories: categoriesOut, tags: tagsOut };
    } catch (e) {
      console.error(`AI suggest failed for blog ${blog.id}:`, e.message);
      return { categories: [], tags: [] };
    }
  }

  let processed = 0;
  let skipped = 0;
  for (const blog of blogs) {
    if (ONLY_EMPTY && ((blog.topic && blog.topic.trim()) || (blog.keywords && blog.keywords.trim()))) {
      skipped += 1;
      continue;
    }
    if (ONLY_MISSING_TOPIC && (blog.topic && blog.topic.trim())) {
      skipped += 1;
      continue;
    }
    if (ONLY_MISSING_TAGS && (blog.keywords && blog.keywords.trim())) {
      skipped += 1;
      continue;
    }
    const ai = await aiSuggestForBlog(blog);
    let categoriesForBlog = ai.categories;
    let tagsForBlog = ai.tags;

    // Ensure at least one category fallback to topic if AI returned none
    if ((!categoriesForBlog || categoriesForBlog.length === 0) && blog.topic) {
      const fallbackCat = normalizeName(blog.topic, { asCategory: true });
      if (fallbackCat) categoriesForBlog = [fallbackCat];
    }

    if (DRY_RUN) {
      console.log(`Blog ${blog.id} -> categories: ${JSON.stringify(categoriesForBlog)}, tags: ${JSON.stringify(tagsForBlog)}`);
      processed += 1;
      continue;
    }

    // Persist categories and links
    for (const cname of categoriesForBlog) {
      const cid = await getCategoryIdByName(cname);
      if (cid) await linkBlogCategory(blog.id, cid);
    }
    // Persist tags and links
    for (const tname of tagsForBlog) {
      const tid = await getTagIdByName(tname);
      if (tid) await linkBlogTag(blog.id, tid);
    }

    // Update blog fields for UI compatibility
    const canonicalCategory = categoriesForBlog[0] || null;
    const keywordsStr = tagsForBlog.join(', ');
    try {
      const updatePayload = {};
      // Always set topic if we have one
      if (canonicalCategory) updatePayload.topic = canonicalCategory;
      // Respect preserve-keywords flag
      if (!PRESERVE_KEYWORDS || !(blog.keywords && blog.keywords.trim())) {
        updatePayload.keywords = keywordsStr;
      }
      if (Object.keys(updatePayload).length > 0) {
        await db.update(BlogsTable).set(updatePayload).where(eq(BlogsTable.id, blog.id));
      }
    } catch (e) {
      console.error(`Failed to update blog ${blog.id} topic/keywords:`, e.message);
    }

    processed += 1;
    if (processed % LOG_EVERY === 0) console.log(`Processed ${processed}/${blogs.length} (skipped ${skipped})`);
  }
  console.log(`Backfill complete. Processed ${processed} blogs. Skipped ${skipped}.`);
}

run().catch((err) => {
  console.error('Backfill failed:', err);
  process.exit(1);
});


