//Tomo cada luz por su id para poder trabajar con ellos
let semaforo1_luz_roja = document.getElementById("semaforo1_luz_roja");
let semaforo1_luz_amarilla = document.getElementById("semaforo1_luz_amarilla");
let semaforo1_luz_verde = document.getElementById("semaforo1_luz_verde");

let semaforo2_luz_roja = document.getElementById("semaforo2_luz_roja");
let semaforo2_luz_amarilla = document.getElementById("semaforo2_luz_amarilla");
let semaforo2_luz_verde = document.getElementById("semaforo2_luz_verde");

/* Colores tomados con la ayuda de https://htmlcolorcodes.com/es/ */

//Colores apagados
let rojo_apagado = "rgb(100, 5, 5)";
let amarillo_apagado = "rgb(109, 100, 3)";
let verde_apagado = "rgb(12, 109, 3)";

//Colores encendido
let rojo_encendido = "rgb(249, 48, 8)";
let amarillo_encendido = "rgb(241, 252, 3)";
let verde_encendido = "rgb(8, 249, 30)";


//colores apagados al iniciar

apagagarTodaslasLuces(); //llamo a la funcion apagar luces 

//creando una funcion porque lo voy a usar varias veces 
function apagagarTodaslasLuces() {
    semaforo1_luz_roja.style.backgroundColor = rojo_apagado;
    semaforo2_luz_roja.style.backgroundColor = rojo_apagado;

    semaforo1_luz_amarilla.style.backgroundColor = amarillo_apagado;
    semaforo2_luz_amarilla.style.backgroundColor = amarillo_apagado;

    semaforo1_luz_verde.style.backgroundColor = verde_apagado;
    semaforo2_luz_verde.style.backgroundColor = verde_apagado;
}

//1. Inicialmente, un semáforo debe estar en rojo y el otro en verde.
semaforo1_luz_roja.style.backgroundColor = rojo_encendido;
semaforo2_luz_verde.style.backgroundColor = verde_encendido;


let secuencia = 0; //verde , amarillo rojo
function cambiarSemaforo() {

    /*     2. Cuando se presiona el botón, uno de los semáforos cambia de rojo a verde,
        mientras que el otro cambia de verde a rojo.
        3. En la transición de verde a rojo o de rojo a verde, deberá pasar por amarillo.
     */
    secuencia = secuencia + 1;
    console.log(secuencia);

    if (secuencia == 1) {
        apagagarTodaslasLuces();//apago todas las luces 
        semaforo2_luz_amarilla.style.backgroundColor = amarillo_encendido;
        semaforo1_luz_roja.style.backgroundColor = rojo_encendido;
    }

    if (secuencia == 2) {
        apagagarTodaslasLuces();//apago todas las luces 
        semaforo2_luz_roja.style.backgroundColor = rojo_encendido;
        semaforo1_luz_verde.style.backgroundColor = verde_encendido;
    }

    if (secuencia == 3) {
        apagagarTodaslasLuces();//apago todas las luces 
        semaforo2_luz_roja.style.backgroundColor = rojo_encendido;
        semaforo1_luz_amarilla.style.backgroundColor = amarillo_encendido;
    }

    if (secuencia == 4) {
        apagagarTodaslasLuces();//apago todas las luces 
        semaforo2_luz_verde.style.backgroundColor = verde_encendido;
        semaforo1_luz_roja.style.backgroundColor = rojo_encendido;

        //reseteo secuencia para comience de nuevo 
        secuencia = 0;
    }


}

let detener = false;
function cambiarSemaforoAutomatico() {

    let timerSemaforo = setInterval(() => {


        if (detener == true) {
            clearInterval(timerSemaforo);
        }

        cambiarSemaforo(); //llamo a la misma funcion creada a mano  

    }, 2000); //ajustando la duracion puede acelerar o retardarlo 

}


function detenerSemaforoAutomatico() {
    detener = true;
  
}


let detenerIntermitente = false;
function cambiarSemaforoIntermitentes() {
    apagagarTodaslasLuces();
    let timerIntermitente = setInterval(() => {


        if (detenerIntermitente == true) {
            clearInterval(timerIntermitente);
        }

        cambiarSemaforoIntermitente();
    }, 1000); //ajustando la duracion puede acelerar o retardarlo 
}

function detenerSemaforoAutomatico() {
    detenerIntermitente = true;
}


let secuenciaIntermitente = 0;
function cambiarSemaforoIntermitente() {

    secuenciaIntermitente= secuenciaIntermitente + 1;
    console.log(secuenciaIntermitente);

    if (secuenciaIntermitente == 2 || secuenciaIntermitente == 1) {
        apagagarTodaslasLuces();//apago todas las luces 
        semaforo1_luz_amarilla.style.backgroundColor = amarillo_encendido;
        semaforo2_luz_amarilla.style.backgroundColor = amarillo_encendido;
    }

    if (secuenciaIntermitente == 3 || secuenciaIntermitente == 4) {
        apagagarTodaslasLuces();//apago todas las luces 
        semaforo1_luz_amarilla.style.backgroundColor = amarillo_apagado;
        semaforo2_luz_amarilla.style.backgroundColor = amarillo_apagado;
    }

    if (secuenciaIntermitente == 5) {
        secuenciaIntermitente = 0;
    }

}

