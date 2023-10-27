
let usuario = "";

function ingresar() {
    let user = document.getElementById("id_user").value;
    let pass = document.getElementById("id_pass").value;
    /*Guardando los datos en el LocalStorage*/
    /* localStorage.setItem("nombreselavariable", valordelavariable); */


    // guarda informacion en en navegador accesible desde cualquier pagina
    localStorage.setItem("Usuario", user);
    localStorage.setItem("Contrasenia", pass);

    usuario = user;


    /*     if (user == "admin" && pass == "1234") { */
    location.href = "principal.html";
    /*     }else{
            alert("Usuario Incorrecto")
        } */

}
function obtenerUsuario() {
    let id_usuariobienvenida = document.getElementById("id_usuariobienvenida");
    //obtener usuario 
    id_usuariobienvenida.innerText = "Hola " + localStorage.getItem("Usuario")
    //alert(localStorage.getItem("Usuario"));
}