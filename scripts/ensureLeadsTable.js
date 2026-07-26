#!/usr/bin/env node
/* Create the leads table if it does not exist. */
require('dotenv').config({ path: '.env.local' });
require('dotenv').config();

const { ensureLeadsTable } = require('../lib/leads');

(async () => {
  try {
    await ensureLeadsTable();
    console.log('leads table ready');
    process.exit(0);
  } catch (error) {
    console.error('Failed to ensure leads table:', error);
    process.exit(1);
  }
})();
