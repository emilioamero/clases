// database.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '192.168.3.10',
  user: '33309073',
  password: '-33309073*.*',
  database: 'lavadero33309073',
});

module.exports = connection.promise();
