const { createConnection } = require('../lib/db');

async function queryDatabase() {
  try {
    // Initialize and await the database connection
    const db = await createConnection();

    // Query the database
    const [rows] = await db.execute('SELECT * FROM blogs');

    console.log(rows);

    // Close the connection when done
    await db.end();
  } catch (error) {
    console.error('Database error:', error.message);
  }
}

// Call the function
queryDatabase();
