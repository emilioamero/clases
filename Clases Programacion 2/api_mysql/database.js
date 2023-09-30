// database.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '192.168.3.10',
  user: '33309073',
  password: '-33309073*.*',
  database: 'lavadero333090733',
});


// Intenta conectarte a la base de datos
connection.connect((err) => {
  if (err) {

    console.error('-----Error al conectar a la base de datos:----------------------------------------------------------');
    console.error('', err);
    console.error('----------------------------------------------------------------------------------------------------');
   // console.error('Error al conectar a la base de datos:', err);
    // Puedes tomar medidas adicionales aquí, como registrar el error o intentar reconectar.
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
    // Ahora puedes ejecutar consultas SQL o realizar operaciones en la base de datos
  }
});

module.exports = connection.promise();
