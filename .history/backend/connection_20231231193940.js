const {Client} = require('pg')

const client = new Client({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: process.env.DATABASE_PORT ,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
})

module.exports = client