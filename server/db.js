const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: '1993',
  host: 'localhost',
  port: 5432,
  database: 'apartmentsdb'
});

module.exports = pool;