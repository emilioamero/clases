
"use strict";

let valor = "fff";

valor = 10.22

//let result = confirm(valor);
//alert (result);


console.log()

document.write(1 + '<br>'); document.write(1);


function fechas() {

    let fecha = new Date("1988-11-09");

    let fechaNueva = fecha.getFullYear();
    alert(fechaNueva);
}

function ShowSelected() {
    /* Para obtener el valor */
    let cod = document.getElementById("producto").value;
    alert(cod);

    /* Para obtener el texto */
    var combo = document.getElementById("producto");
    var selected = combo.options[combo.selectedIndex].text;
    alert(selected);


    document.getElementById("datocombo").innerHTML = `<b>${cod}<b/>`;
    document.getElementById("datocombo").innerHTML = `<b>${selected}<b/>`;
}

function ShowSelected2() {
    alert("test");
}

function getValueInput() {
    let txtvalor1 = document.getElementById("txtvalor1").value;
    let txtvalor2 = document.getElementById("txtvalor2").value;

    console.log(document.getElementById("txtvalor1"));

    if (txtvalor1 == "" || txtvalor2 == "") {
        alert("Ingrese Un valor");
        return;

    }

    if (isNaN(txtvalor1) || isNaN(txtvalor2)) {
        alert("Ingrese Un valor Númerico");
        return;
    }

    let resultado = parseFloat(txtvalor1) + parseFloat(txtvalor2);

    let txtResultado = document.getElementById("txtresultado");
    txtResultado.value = resultado;

    document.getElementById("tituloDos").innerHTML = "hola"


    if (resultado > 10) {
        txtResultado.className = "cssred";
    } else {
        txtResultado.className = "cssblue";
    }




}