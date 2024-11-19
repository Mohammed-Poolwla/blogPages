// eslint-disable-next-line 
const { drizzle } = require('drizzle-orm/vercel-postgres');
// eslint-disable-next-line 
const { sql } = require("@vercel/postgres");
// eslint-disable-next-line 
const { pgTable, serial, text, uniqueIndex, varchar} = require('drizzle-orm/pg-core');

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
  },
  (blogs) => {
    return {
      uniqueSlugIdx: uniqueIndex('unique_slug_idx').on(blogs.slug),
    };
  },
);

module.exports = {
  db,
  BlogsTable
};
