import { BlogsTable, db } from "../../lib/db";

function generateSiteMap(urls) {
  const urlSet = urls
    .map((u) => `\n  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq || "weekly"}</changefreq>\n    <priority>${u.priority || "0.7"}</priority>\n  </url>`)
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}\n</urlset>`;
}

export default async function handler(req, res) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://websrc.uk";

  const staticUrls = [
    { loc: `${baseUrl}/`, priority: "1.0" },
    { loc: `${baseUrl}/about` },
    { loc: `${baseUrl}/services` },
    { loc: `${baseUrl}/contact` },
    { loc: `${baseUrl}/blogs` },
    { loc: `${baseUrl}/privacy`, changefreq: "yearly", priority: "0.3" },
    { loc: `${baseUrl}/terms`, changefreq: "yearly", priority: "0.3" },
    { loc: `${baseUrl}/disclaimer`, changefreq: "yearly", priority: "0.3" },
    { loc: `${baseUrl}/cookies`, changefreq: "yearly", priority: "0.3" },
  ];

  let blogUrls = [];
  try {
    const blogs = await db.select().from(BlogsTable);
    blogUrls = blogs.map((b) => ({ loc: `${baseUrl}/blogs/${b.slug}` }));
  } catch (e) {
    blogUrls = [];
  }

  const sitemap = generateSiteMap([...staticUrls, ...blogUrls]);
  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();
}


