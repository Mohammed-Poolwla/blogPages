#!/usr/bin/env node
require("dotenv").config({ path: ".env.local" });
require("dotenv").config();

const { ensureLeadsTable } = require("../lib/leads");

async function main() {
  await ensureLeadsTable();
  console.log("leads table ready");
}

main().catch((error) => {
  console.error("Failed to ensure leads table:", error);
  process.exit(1);
});
