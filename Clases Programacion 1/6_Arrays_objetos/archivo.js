
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


function alertafuncion() {
    let x = prompt("Ingrese Numero");
    let y = prompt("Ingrese Numero");
    alert(Number(x) + Number(y));
}

/* let animal = "gato";

function funcionEjercicio1() {
    let animal = "perro";
    document.write(animal.toUpperCase()) //Convierte mayusculas
    document.write(animal.toLowerCase()) //Convierte a minusculas
} */

function funcionEjercicio2() {
    let animales = [
        'perro',
        'gato',
        'elefante',
        'jirafa',
        'tigre',
        'oso',
        'conejo',
        'león',
        'cebra',
        'mono'
    ];

    for (let index = 0; index < animales.length; index++) {

        let animalseleccionado = animales[index];

        if (animalseleccionado[animalseleccionado.length - 1] == "a") {
            document.write("La " + animales[index] + "<br>")
        } else { //el n o

            document.write("El " + animales[index] + "<br>")
        }

    }

}


function funcionEjercicio3() {
    let listaDeCompras = ['manzanas', 'pan', 'leche', 'huevos', 'arroz', 'pollo', 'papas', 'zanahorias',
        'cebollas', 'pasta'];




    let articulo = prompt("Ingrese Valor");
    //let articulo2 = prompt("Ingrese Valor");

    let indice = listaDeCompras.findIndex((x) => x == articulo);
    document.write(indice);

    /*   if (listaDeCompras.includes(articulo) == true) {
          alert("El articulo existe")
      } else {
          //agrego a la lista push
          listaDeCompras.push(articulo);
          listaDeCompras.push(articulo2);
          document.write(listaDeCompras)
      }
   */



}