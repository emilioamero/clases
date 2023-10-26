
let titulo2 = document.createElement("h2");
let contenedor2 = document.getElementById("contenedor2");



titulo2.innerText = "Hola";
contenedor2.appendChild(titulo2);


function obtenerUsuario() {
    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.getElementById("contra").value;

    let contraseniaUsuario = "1234";

    if (contrasenia == contraseniaUsuario) {
        alert("Contraseña Correcta");
    } else {
        alert("Contraseña Incorrecta");
    }


}

function cambioColorRojo() {
    titulo2.style.color = "red";
    titulo2.style.background = " #f1c40f";
}

function cambioColorAzul() {
    titulo2.style.color = "blue";
    titulo2.style.background = "yellow";
}

console.log(titulo2);