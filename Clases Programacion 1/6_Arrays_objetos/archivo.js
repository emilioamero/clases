
let equiposFutbol = ["River Plate", "Boca Jrs","San Lorenzo"];

let equiposFutbol2 = [
{nombre: "River Plate", copas: 4, fundo:1899},
{nombre: "Boca Jrs", copas: 7, fundo:2001},
{nombre: "San Lorenzo", copas: 1, fundo:1987}
];

for (let index = 0; index < equiposFutbol2.length; index++) {
    document.write( `Nombre: ${equiposFutbol2[index].nombre} Copas ${equiposFutbol2[index].copas} se fundó ${equiposFutbol2[index].fundo} <br>` )
    
}


