// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'mvue-rw',
  host: 'mvue.c4svllnvqvks.us-west-2.rds.amazonaws.com',
  database: 'mvue',
  password: '62l1YleYbgQwZcLX',
  port: 5432, // or your PostgreSQL port
});

module.exports = pool;
