const {Client} = require('pg')

const client = new Client({
  connectionString: 'postgres://root:zgwwTb2jL9uCdlJV2xVmWrYj29zS6FCe@dpg-cm8mku21hbls73ad4sqg-a/doubtshare_postgres',
  ssl: { rejectUnauthorized: false } // Add this line to disable SSL certificate verification
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL database on Render'))
  .catch(err => console.error('Connection to PostgreSQL database failed', err));

module.exports = client