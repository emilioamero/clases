
/* let equiposFutbol = ["River Plate", "Boca Jrs", "San Lorenzo"];

let equiposFutbol2 = [
    { nombre: "River Plate", copas: 4, fundo: 1899 },
    { nombre: "Boca Jrs", copas: 7, fundo: 2001 },
    { nombre: "San Lorenzo", copas: 1, fundo: 1987 }
];



//Array aravez de su posicion
document.write(equiposFutbol[1]);

//Asi accdemos de objetos, posicion y la clave 
for (let index = 0; index < equiposFutbol2.length; index++) {
    document.write(`Nombre: ${equiposFutbol2[index].nombre} Copas ${equiposFutbol2[index].copas} se fundó ${equiposFutbol2[index].fundo} <br>`)

}

 */








let arraydearrays =
    [
        [[1, 2, 3], 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];



/* for (let fila = 0; fila < arraydearrays.length; fila++) {

    let arrayinterior = arraydearrays[fila];

    for (let indiceinterior = 0; indiceinterior < arrayinterior.length; indiceinterior++) {

 
        if (fila != arraydearrays.length && indiceinterior !=arrayinterior.length -1) {
   
            document.write(arrayinterior[indiceinterior] + ", ");
        } else {
            document.write(arrayinterior[indiceinterior]);
        }



    }
    document.write("<br>");



    //document.write(arraydearrays[fila] + "</br>"); // esta bien

} */


/* for (let fila = 0; fila < arraydearrays.length; fila++) {

    for (let columna = 0; columna < arraydearrays.length; columna++) {

        document.write(arraydearrays[fila][columna] + "<br>");

    }
} 
 */


function alertafuncion(){
    let x= prompt("Ingrese Numero");
    let y= prompt("Ingrese Numero");
    alert(Number(x)+Number(y));
}