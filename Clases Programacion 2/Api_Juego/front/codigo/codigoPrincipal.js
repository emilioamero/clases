"use strict"

let soyCaballoRojo = false;
let soyCaballoAzul = false;
let colorenletras = "";
let cantidadDepxeles = 10;//10
let interrumpirReloj = false;
let horse1Position = 0;
let horse2Position = 0;


const horse1 = document.getElementById('horse1');
const horse2 = document.getElementById('horse2');
const valor_dado = document.getElementById('valor_dado');
const btn_horsered = document.getElementById('btn_horsered');
const btn_horseazul = document.getElementById('btn_horseazul');
const btn_dado = document.getElementById('btn_dado');
const label_jugador = document.getElementById('label_jugador');
const label_jugadorrojopuntaje = document.getElementById('label_jugadorrojopuntaje');
const label_jugadorazulpuntaje = document.getElementById('label_jugadorazulpuntaje');




/* Por defecto */
horse1.style.left = 0 + "px";
btn_dado.hidden = true;

function reset() {
    resetVariablesServidor();
    interrumpirReloj = true;
    horse1.style.left = 0 + "px";
    horse2.style.left = 0 + "px";
    soyCaballoRojo = false;
    soyCaballoAzul = false;
    colorenletras = "";
    label_jugador.innerText = "-";
    btn_dado.disabled = false;
    horse1Position = 0;
    horse2Position = 0;
    label_jugadorrojopuntaje.innerHTML = `Puntaje`;
    label_jugadorazulpuntaje.innerHTML = `Puntaje`;

}

function seleccionJugador(color) {
    if (color == "rojo") {
        //ves estadisticas del azul porque soy rojo
        btn_horseazul.hidden = true;
        btn_horsered.hidden = true;
        btn_dado.hidden = false;
        soyCaballoRojo = true;
        label_jugador.classList = "buttonclassrojo";
        colorenletras = "Caballo Rojo";

    } else {
        btn_horseazul.hidden = true;
        btn_horsered.hidden = true;
        btn_dado.hidden = false;
        soyCaballoAzul = true;
        label_jugador.classList = "buttonclassazul";
        colorenletras = "Caballo Azul";
    }
    label_jugador.innerText = `Eres el ${colorenletras}`;
    interrumpirReloj = false;
    comenzarReloj();
    // btn_dado.innerHTML = `Dado ${colorenletras}`;
}


function lanzarDado() {

    let valorDado = getRandomIncluirValores(1, 6);
    valor_dado.innerHTML = `Dado ${colorenletras}: ${valorDado}`;


    if (soyCaballoRojo) {
        horse1Position = parseInt(horse1Position) + valorDado;
        horse1.style.left = horse1Position * cantidadDepxeles + 'px';
        guardarProgreso(horse1Position);
    } else {
        horse2Position = parseInt(horse2Position) + valorDado;
        horse2.style.left = horse2Position * cantidadDepxeles + 'px';
        guardarProgreso(horse2Position);

    }

}

async function guardarProgreso(horsePosition) {

    let dato = {};
    if (soyCaballoRojo) {
        dato = {
            "jugador": "rojo",
            "puntaje": horsePosition
        };
    } else {
        dato = {
            "jugador": "azul",
            "puntaje": horsePosition
        };
    }

    await fetch(`http://localhost:3000/guardarprogreso`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dato),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Respuesta:", data);

            /*        if (data.turno == "rojo") {
                       btn_dado.innerHTML = `Turno del Caballo Rojo`;
                   } else {
                       btn_dado.innerHTML = `Turno del Caballo Azul`;
                   } */
            btn_dado.disabled = true;

        })
        .catch((error) => {
            //  console.error("Error:", error);
        });
}

function comenzarReloj() {
    let actualizaInfoServer = setInterval(() => {
        cargarStatus();

        if (interrumpirReloj == true) {
            clearInterval(actualizaInfoServer);
        }
    }, 500);
}



async function cargarStatus() {
    //cuando no se menciona el metodo po defecto es GET
    await fetch(`http://localhost:3000/obtenerstatus`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.status);
            }
            return response;
        })
        .then((response) => response.json()) //Respuesta Cabecera
        .then((data) => {
            console.log(data);
            btn_dado.disabled = true;
            if (data.turnodel == "rojo") {

                horse2.style.left = data.progresojugadorazul * cantidadDepxeles + 'px';
                label_jugadorazulpuntaje.innerHTML = `Puntaje caballo azul: ${data.progresojugadorazul} `
                if (soyCaballoRojo) {
                    btn_dado.innerHTML = `Tu turno`;
                    btn_dado.disabled = false;
                } else {
                    btn_dado.disabled = true;
                    btn_dado.innerHTML = `Turno del Caballo Rojo`;
                }
            }
            if (data.turnodel == "azul") {
                //  btn_dado.innerHTML = `Turno del Caballo Azul .`;
                horse1.style.left = data.progresojugadorrojo * cantidadDepxeles + 'px';
                label_jugadorrojopuntaje.innerHTML = `Puntaje caballo azul: ${data.progresojugadorrojo} `
                if (soyCaballoAzul) {
                    btn_dado.disabled = false;
                    btn_dado.innerHTML = `Tu turno`;
                } else {
                    btn_dado.disabled = true;
                    btn_dado.innerHTML = `Turno del Caballo Azul`;
                }
            }

            if (data.progresojugadorrojo >= 25 || data.progresojugadorazul >= 25) {
                if (data.progresojugadorrojo > data.progresojugadorazul) {
                    result.innerText = '¡Caballo Rojo gana!';
                    interrumpirReloj = true;
                } else {
                    result.innerText = '¡Caballo Azul gana!';
                    interrumpirReloj = true;
                }
            }
        });
}


