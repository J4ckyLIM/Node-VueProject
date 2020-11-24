const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost', // Change this part with your own settings
  database: 'metcequetuveux', // Change this part with your own settings
  password: 'admin', // Change this part with your own settings
  port: 5432 // Change this part with your own settings
})

module.exports = pool