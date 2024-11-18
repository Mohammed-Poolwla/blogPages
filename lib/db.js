// eslint-disable-next-line @typescript-eslint/no-var-requires
const mysql = require('mysql2/promise');

// Function to create the MySQL connection
async function createConnection() {

  return await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
}

// Export the function to use in other files
module.exports = {
  createConnection,
};
