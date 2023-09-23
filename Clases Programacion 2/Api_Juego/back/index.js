const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const cors = require("cors"); // Importa el módulo cors

const app = express();
// Habilita CORS para todas las rutas, con esta sentencia permite todo
app.use(cors());

//Para Cors Mas especificos
/* const corsOptions = {
  origin: "http://127.0.0.1:5500", // Esta es la ip del Live Server
  methods: "GET, POST, PUT, DELETE, PATCH", // Métodos HTTP permitidos
  optionsSuccessStatus: 204,
};


app.use(cors(corsOptions)); */
/* Fin Cors */

app.use(express.json());
app.use(morgan("dev"));

const FILE_NAME = "./datos/data.json";

/* parametros
 req params 
  req body 
  variables en back */

// Endpoint Raiz
app.get("/", (req, res) => {
  res.json({
    Materia: "Programacion 2",
    API: "Juego",
    Status: "Servidor Funcionando",
  });
});



let progresojugadorrojo = 0;
let progresojugadorazul = 0;
let turnodel = "rojo";

app.post("/guardarprogreso", (req, respuesta) => {

  const jugador = req.body.jugador;

  if (jugador == "rojo") {
    turnodel = "azul";
    progresojugadorrojo = req.body.puntaje;
  } else {
    progresojugadorazul = req.body.puntaje;
    turnodel = "rojo";
  }


  respuesta.json({
    mensajeservidor: "Datos Guardados",
    turno: turnodel
  });



});

app.get("/reset", (req, res) => {


  progresojugadorrojo = 0
  progresojugadorazul = 0;
  turnodel = "rojo";

  res.json({
    mensajeservidor: "Reset variables",
  });
});


app.get("/obtenerstatus", (req, res) => {

  res.json({
    progresojugadorrojo: progresojugadorrojo,
    progresojugadorazul: progresojugadorazul,
    turnodel: turnodel
  });
});




/* Funciones del Juego 
function getRandomIncluirValores(min, max) {
  min = Math.floor(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}*/

/* ------------------------------------------------------------------------------------------- */





app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
