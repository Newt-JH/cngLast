const mysql = require('mysql2/promise');

async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: 'selectbase.selectfromuser.com',
    user: '31619808298a07629def',
    password: '980915',
    database: '1f89eb75d1376bcf1a94',
  });

  return connection;
}

module.exports = connectToDatabase;