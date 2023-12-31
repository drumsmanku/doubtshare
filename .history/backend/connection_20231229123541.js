const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 8000,
    password: "rootUser",
    database: "postgres"
})

module.exports = client