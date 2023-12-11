const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'pern_db',
  password: 'root',
  host: 'db',
  port: 5432,
  database: 'api'
});

module.exports = pool;