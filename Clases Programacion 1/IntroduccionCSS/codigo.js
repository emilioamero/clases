
function cambiarColor() {

    let contenedor1 = document.getElementById("contenedor1");

    contenedor1.style.backgroundColor = "green";

    console.log(contenedor1);

}


function cambiarTexto() {
    let contenedor1 = document.getElementById("contenedor1");

    contenedor1.innerText = "Emilio";
}

let contador = 0;


//reloj
let totalSegundos = 0;
let totalMinutos = 0;

let timer = setInterval(() => {
    let tituloreloj = document.getElementById("reloj");
    let minutos = document.getElementById("minutos");
    let segundos = document.getElementById("segundos");
    tituloreloj.innerText = contador;
    contador = contador + 1;
    //  document.write(contador + "<br>");



    if (totalSegundos <= 9) {// para que se vea de a dos digitos
        segundos.innerText = "0" + totalSegundos;//agrego el cero
    } else {
        segundos.innerText = totalSegundos;
    }

    totalSegundos = totalSegundos + 1;

    if (totalSegundos == 60) {
        totalMinutos = totalMinutos + 1;
        totalSegundos = 0;//reseteo segundos
        if (totalSegundos <= 9) {// para que se vea de a dos digitos
            minutos.innerText = "0" + totalMinutos;//agrego el cero
        } else {
            minutos.innerText = totalMinutos;
        }




    }







    if (contador == 1000) {
        clearInterval(timer);
    }
}, 250);

/* 
setTimeout(() => {
    
}, timeout); */