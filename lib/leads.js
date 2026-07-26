/* eslint-disable @typescript-eslint/no-var-requires */
const { sql, db, LeadsTable } = require("./db");
const { eq } = require("drizzle-orm");

let ensured = false;

async function ensureLeadsTable() {
  if (ensured) return;

  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id SERIAL PRIMARY KEY,
      source VARCHAR(64),
      name VARCHAR(255),
      email VARCHAR(255),
      subject VARCHAR(255),
      message TEXT,
      company VARCHAR(255),
      status VARCHAR(64),
      external_id VARCHAR(255),
      meta TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  await sql`
    CREATE UNIQUE INDEX IF NOT EXISTS unique_lead_external_idx
    ON leads (external_id)
  `;

  ensured = true;
}

async function saveLead(lead) {
  await ensureLeadsTable();

  const metaValue =
    lead.meta == null
      ? null
      : typeof lead.meta === "string"
        ? lead.meta
        : JSON.stringify(lead.meta);

  const values = {
    source: lead.source || "contact",
    name: lead.name || null,
    email: lead.email || null,
    subject: lead.subject || null,
    message: lead.message || null,
    company: lead.company || null,
    status: lead.status || "new",
    externalId: lead.externalId || null,
    meta: metaValue,
  };

  if (values.externalId) {
    try {
      const inserted = await db.insert(LeadsTable).values(values).returning();
      return inserted[0] || null;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (!/unique|duplicate/i.test(message)) throw error;

      const updated = await db
        .update(LeadsTable)
        .set({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          company: values.company,
          status: values.status,
          meta: values.meta,
          source: values.source,
        })
        .where(eq(LeadsTable.externalId, values.externalId))
        .returning();
      return updated[0] || null;
    }
  }

  const inserted = await db.insert(LeadsTable).values(values).returning();
  return inserted[0] || null;
}

module.exports = {
  ensureLeadsTable,
  saveLead,
};
