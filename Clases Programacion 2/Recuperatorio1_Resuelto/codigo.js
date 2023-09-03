"use strict";

/* Datos de Ventas */
let datos = [
  {
    codigo: "OF001",
    descripcion: "Lápiz",
    precio: 1.99,
    cantidadvendida: 10,
    categoria: "Escritura",
  },
  {
    codigo: "OF002",
    descripcion: "Cuaderno",
    precio: 2.99,
    cantidadvendida: 5,
    categoria: "Papel",
  },
  {
    codigo: "OF003",
    descripcion: "Grapas",
    precio: 0.99,
    cantidadvendida: 20,
    categoria: "Adhesivos",
  },
  {
    codigo: "OF004",
    descripcion: "Calculadora",
    precio: 12.99,
    cantidadvendida: 2,
    categoria: "Electrónica",
  },
  {
    codigo: "OF005",
    descripcion: "Cinta adhesiva",
    precio: 1.49,
    cantidadvendida: 15,
    categoria: "Adhesivos",
  },
  {
    codigo: "OF006",
    descripcion: "Rotulador",
    precio: 1.99,
    cantidadvendida: 8,
    categoria: "Escritura",
  },
  {
    codigo: "OF007",
    descripcion: "Pegamento",
    precio: 2.49,
    cantidadvendida: 12,
    categoria: "Adhesivos",
  },
  {
    codigo: "OF008",
    descripcion: "Resaltador",
    precio: 1.79,
    cantidadvendida: 6,
    categoria: "Escritura",
  },
  {
    codigo: "OF009",
    descripcion: "Archivador",
    precio: 4.99,
    cantidadvendida: 3,
    categoria: "Almacenamiento",
  },
  {
    codigo: "OF010",
    descripcion: "Tijeras",
    precio: 2.99,
    cantidadvendida: 7,
    categoria: "Herramientas",
  },
  {
    codigo: "OF011",
    descripcion: "Papelera",
    precio: 3.49,
    cantidadvendida: 4,
    categoria: "Almacenamiento",
  },
  {
    codigo: "OF012",
    descripcion: "Clip",
    precio: 0.49,
    cantidadvendida: 30,
    categoria: "Adhesivos",
  },
  {
    codigo: "OF013",
    descripcion: "Agenda",
    precio: 7.99,
    cantidadvendida: 1,
    categoria: "Papel",
  },
  {
    codigo: "OF014",
    descripcion: "Goma de borrar",
    precio: 0.99,
    cantidadvendida: 10,
    categoria: "Escritura",
  },
  {
    codigo: "OF015",
    descripcion: "Perforadora",
    precio: 6.99,
    cantidadvendida: 2,
    categoria: "Herramientas",
  },
  {
    codigo: "OF016",
    descripcion: "Pizarra blanca",
    precio: 14.99,
    cantidadvendida: 1,
    categoria: "Papel",
  },
  {
    codigo: "OF017",
    descripcion: "Portaminas",
    precio: 2.49,
    cantidadvendida: 5,
    categoria: "Escritura",
  },
  {
    codigo: "OF018",
    descripcion: "Pegatinas",
    precio: 0.79,
    cantidadvendida: 25,
    categoria: "Adhesivos",
  },
  {
    codigo: "OF019",
    descripcion: "Carpetas",
    precio: 3.99,
    cantidadvendida: 4,
    categoria: "Almacenamiento",
  },
  {
    codigo: "OF020",
    descripcion: "Plastificadora",
    precio: 34.99,
    cantidadvendida: 1,
    categoria: "Electrónica",
  },

  {
    codigo: "OF021",
    descripcion: "Pistola de Silicona",
    precio: 100.0,
    cantidadvendida: 1,
    categoria: "Electrónica",
  },
];

/* Fecha */
let fecha = document.getElementById("fecha");
let fechaActual = new Date();
let dia = fechaActual.getDate();
let mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por lo que se suma 1
let anio = fechaActual.getFullYear();
fecha.textContent = `Ventas del dia  ${dia} / ${mes} /  ${anio}`;
/* Div Contenedor */
let tablaContainer = document.getElementById("tablaContainer");

cargarTabla();

//cargartotales();

function ocultarMostrarTabla() {
  if (tablaContainer.hidden) {
    tablaContainer.hidden = false;
  } else {
    tablaContainer.hidden = true;
  }
}

function cargarTabla() {
  tablaContainer.innerHTML = "";
  let tabla = document.createElement("table");
  tabla.classList = "estilostabla";
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  /* Encabezados */
  let encabezado = document.createElement("tr");

  let codigoHeader = document.createElement("th");
  codigoHeader.textContent = "Código";
  encabezado.appendChild(codigoHeader);

  let descripcionHeader = document.createElement("th");
  descripcionHeader.textContent = "Descripción";
  encabezado.appendChild(descripcionHeader);

  let precioHeader = document.createElement("th");
  precioHeader.textContent = "Precio s/Iva";
  encabezado.appendChild(precioHeader);

  let cantidadVendidaHeader = document.createElement("th");
  cantidadVendidaHeader.textContent = "Cantidad Vendida";
  encabezado.appendChild(cantidadVendidaHeader);

  let categoriaHeader = document.createElement("th");
  categoriaHeader.textContent = "Categoría";
  encabezado.appendChild(categoriaHeader);

  let totalsi = document.createElement("th");
  totalsi.textContent = "Total s/Iva";
  encabezado.appendChild(totalsi);

  let totalci = document.createElement("th");
  totalci.textContent = "Total c/Iva";
  encabezado.appendChild(totalci);

  thead.appendChild(encabezado);

  /* Registros */
  for (let i = 0; i < datos.length; i++) {
    let registro = datos[i];

    let fila = document.createElement("tr");

    let codigoCell = document.createElement("td");
    codigoCell.textContent = registro.codigo;
    fila.appendChild(codigoCell);

    let descripcionCell = document.createElement("td");
    descripcionCell.textContent = registro.descripcion;

    if (
      registro.categoria == "Electrónica" ||
      registro.categoria == "Adhesivos"
    ) {
      descripcionCell.classList = "categoriaespecial";
    }

    fila.appendChild(descripcionCell);

    let preciosivaCell = document.createElement("td");
    preciosivaCell.textContent = registro.precio;
    fila.appendChild(preciosivaCell);

    let cantidadVendidaCell = document.createElement("td");
    cantidadVendidaCell.textContent = registro.cantidadvendida;
    fila.appendChild(cantidadVendidaCell);

    let categoriaCell = document.createElement("td");
    categoriaCell.textContent = registro.categoria;
    fila.appendChild(categoriaCell);

    let totalsiiva = document.createElement("td");
    totalsiiva.textContent = calcularTotalSinIva(
      registro.precio,
      registro.cantidadvendida
    );
    fila.appendChild(totalsiiva);

    let totalconiva = document.createElement("td");
    totalconiva.textContent = calcularTotalConIva(
      registro.precio,
      registro.cantidadvendida
    );
    fila.appendChild(totalconiva);

    tbody.appendChild(fila);
  }

  tabla.appendChild(thead);
  tabla.appendChild(tbody);
  tablaContainer.appendChild(tabla);

  cargartotales();
}

function agregarInfo() {
  let codigoinput = document.getElementById("codigoinput").value;
  let descripcioninput = document.getElementById("descripcioninput").value;
  let precioinput = document.getElementById("precioinput").value;
  let cantidadinput = document.getElementById("cantidadinput").value;

  if (codigoinput == "" || codigoinput.length != 5) {
    alert("Codigo Invalido");
    return;
  }

  if (validarCodigo(codigoinput)!=-1){
    alert("Codigo Repetido");
    return;
  };

  if (descripcioninput == "") {
    alert("Descripcion Invalida");
    return;
  }

  if (cantidadinput == "" || cantidadinput <= 0) {
    alert("La Cantidad no debe estar vacio y debe ser mayor a cero");
    return;
  }

  if (precioinput == "" || precioinput <= 0) {
    alert("El Precio no debe estar vacio y debe ser mayor a cero");
    return;
  }

  datos.push({
    "codigo": codigoinput,
    descripcion: descripcioninput,
    precio: precioinput,
    cantidadvendida: cantidadinput,
    categoria: "Adhesivos",
  });

  cargarTabla();

  //cargartotales();

}

function calcularTotalSinIva(precio, cantidad) {
  let total = precio * cantidad;
  total = total.toFixed(2);
  return total;
}

function calcularTotalConIva(precio, cantidad) {
  let total = precio * cantidad;
  //total = total * 1.21;
  total = total + (total * 21 /100);
  total = total.toFixed(2);
  return Number(total);
}

function CalcularTotalGeneral() {
  let suma = 0;
  for (let i = 0; i < datos.length; i++) {
    suma =
      suma + calcularTotalConIva(datos[i].precio, datos[i].cantidadvendida);
  }
  suma = suma.toFixed(2);
  return suma;
}

function cargartotales() {
  let cantidadderegistros = document.getElementById("cantidadderegistros");
  cantidadderegistros.textContent = "Cantidad de Registros: " + datos.length;

  let totalegeneral = document.getElementById("totalegeneral");
  totalegeneral.textContent = "Total General $: " + CalcularTotalGeneral();

}


function validarCodigo(valido){
    let indice = datos.findIndex((x) => x.codigo == valido);
   return indice;
}


