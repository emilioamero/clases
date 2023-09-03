const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// Configuración de Sequelize
// const sequelize = new Sequelize('prueba', 'sa', '33309073', {
//   dialect: 'mssql',
//   dialectOptions: {
//     options: {
//       encrypt: true // Importante si se está utilizando Azure
//     }
//   }
// });

const sequelize = new Sequelize(
  "prueba",
  "sa", 
  "33309073", {
  host: "DESKTOP-FCB7RSB",
  "dialect":"mssql",
  "port":1433,
  "options": {
      encrypt: false,
      enableArithAbort: false
  },
  dialectOptions: {
      instanceName: "MSSQLSERVER"
  }

});


// Definición del modelo
const Usuario = sequelize.define('usuario', {
  codigo: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Configuración de Express
const app = express();
app.use(bodyParser.json());

// Rutas de la API
app.get('/usuarios', async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
});

app.post('/usuarios', async (req, res) => {
  const usuario = await Usuario.create(req.body);
  res.json(usuario);
});

// Inicio del servidor
const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});
