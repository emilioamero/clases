// database.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '33309073',
  database: 'test',
});

module.exports = connection.promise();
