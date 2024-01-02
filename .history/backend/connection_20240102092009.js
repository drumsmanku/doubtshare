const { Client } = require('pg');

async function queryDatabase() {
  const client = new Client({
    connectionString: 'postgres://username:password@host:port/database',
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    await client.connect();
    // Perform your database operations here
    const result = await client.query('SELECT * FROM your_table');
    console.log(result.rows);
  } catch (error) {
    console.error('Error executing database query:', error);
  } finally {
    await client.end(); // Close the client after the operation
  }
}

queryDatabase();
