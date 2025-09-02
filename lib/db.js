// eslint-disable-next-line 
const { drizzle } = require('drizzle-orm/vercel-postgres');
// eslint-disable-next-line 
const { sql } = require("@vercel/postgres");
// eslint-disable-next-line 
const { pgTable, serial, text, uniqueIndex, varchar, integer } = require('drizzle-orm/pg-core');

// Use this object to send drizzle queries to your DB
const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
const BlogsTable = pgTable(
  'blogs',
  {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }),
    slug: varchar('slug', { length: 255 }),
    content: text('content'),
    topic: varchar('topic', { length: 225 }),
    persona: text('persona'),
    image: varchar('image', { length: 255 }),
    description: text('description'),
    keywords: text('keywords'),
    quote: text('quote'),
  },
  (blogs) => {
    return {
      uniqueSlugIdx: uniqueIndex('unique_slug_idx').on(blogs.slug),
    };
  },
);

// Categories table
const CategoriesTable = pgTable(
  'categories',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }),
  },
  (categories) => {
    return {
      uniqueCategoryNameIdx: uniqueIndex('unique_category_name_idx').on(categories.name),
    };
  },
);

// Tags table
const TagsTable = pgTable(
  'tags',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }),
  },
  (tags) => {
    return {
      uniqueTagNameIdx: uniqueIndex('unique_tag_name_idx').on(tags.name),
    };
  },
);

// Blog to Category mapping (supports 1..N if needed)
const BlogCategoriesTable = pgTable(
  'blog_categories',
  {
    id: serial('id').primaryKey(),
    blogId: integer('blog_id'),
    categoryId: integer('category_id'),
  },
  (bc) => {
    return {
      uniqueBlogCategoryIdx: uniqueIndex('unique_blog_category_idx').on(bc.blogId, bc.categoryId),
    };
  },
);

// Blog to Tag mapping (many-to-many)
const BlogTagsTable = pgTable(
  'blog_tags',
  {
    id: serial('id').primaryKey(),
    blogId: integer('blog_id'),
    tagId: integer('tag_id'),
  },
  (bt) => {
    return {
      uniqueBlogTagIdx: uniqueIndex('unique_blog_tag_idx').on(bt.blogId, bt.tagId),
    };
  },
);

module.exports = {
  db,
  BlogsTable,
  CategoriesTable,
  TagsTable,
  BlogCategoriesTable,
  BlogTagsTable
};
