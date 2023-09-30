/*  let contador = 0;

contador = contador + 1;
contador += 1;
contador++;

let cantidadveces= prompt("Ingrese cantidad de veces a ejecutar");

for (let index = 10; index <=Number(cantidadveces); index++ ) {
    document.write( index + "</br>")
}
  */

///let nombresdeperro = ["Tobi", "India", "Cali", "Beba", "Pelusa", "Atila", "Sal", "Pimienta"]

/* document.write(nombresdeperro + "</br>");
document.write(nombresdeperro[2]); */

//document.write(nombresdeperro.length + "</br>");

/* for (let indice = 0; indice <= nombresdeperro.length -1; indice++) {
    document.write(nombresdeperro[indice] + "</br>")
}
 */

/* for (let indice = nombresdeperro.length-1; indice >= 0; indice--) {
    document.write(nombresdeperro[indice] + "</br>")
}
 */

/* for (let indice = 0; indice <nombresdeperro.length; indice++) {
    document.write(nombresdeperro[indice].toUpperCase() + "</br>")
} */

/* for (let indice = 0; indice <nombresdeperro.length; indice++) {
    document.write(nombresdeperro[indice].toLowerCase() + "</br>")
} */


/* for (let indice = 0; indice <nombresdeperro.length; indice++) {
    document.write(nombresdeperro[indice].length + "</br>")
}
 */

//indice del elemento
/* for (const elemento in nombresdeperro) {
    // let variabledentrodelfor = 0;
    document.write(elemento + "</br>");
} */
//contenido del elemento
/*  for (const elemento of nombresdeperro) {
    document.write(elemento + "</br>");
}  */

/* nombresdeperro.forEach(elemento => {
    document.write(elemento + "</br>");
});
  */


let numerosamultiplicar= [0,1,2,3,4,5,6,7,8,9,10];

let numeroingresado= prompt("Ingrese Numero a Multiplicar");


for (let indice = 0; indice < numerosamultiplicar.length; indice++) {
   
    document.write(numerosamultiplicar[indice] +" x "+ 
    numeroingresado +" = "+ numerosamultiplicar[indice] * 
    parseInt(numeroingresado) + "<br>" )


}

