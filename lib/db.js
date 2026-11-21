// eslint-disable-next-line 
const { drizzle } = require('drizzle-orm/vercel-postgres');
// eslint-disable-next-line 
const { sql } = require("@vercel/postgres");
// eslint-disable-next-line 
const { pgTable, serial, text, uniqueIndex, varchar, timestamp } = require('drizzle-orm/pg-core');

// Use this object to send drizzle queries to your DB
const db = drizzle(sql);

// Contact form + Cal.com booking leads
const LeadsTable = pgTable(
  'leads',
  {
    id: serial('id').primaryKey(),
    source: varchar('source', { length: 64 }),
    name: varchar('name', { length: 255 }),
    email: varchar('email', { length: 255 }),
    subject: varchar('subject', { length: 255 }),
    message: text('message'),
    company: varchar('company', { length: 255 }),
    status: varchar('status', { length: 64 }),
    externalId: varchar('external_id', { length: 255 }),
    meta: text('meta'),
    createdAt: timestamp('created_at').defaultNow(),
  },
  (leads) => {
    return {
      uniqueLeadExternalIdx: uniqueIndex('unique_lead_external_idx').on(leads.externalId),
    };
  },
);

module.exports = {
  db,
  sql,
  LeadsTable,
};
