let result = document.getElementById("result");

let guardado = [];

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  result.value += operator;
}

function calculateResult() {
  try {
    //operacion
    let opera = "";
    opera = result.value;
    //resul
    result.value = eval(result.value);
    guardado.push(opera + '=' + String(result.value));
    insertarLista();
    //clearResult();
  } catch (error) {
    result.value = "Error";
  }
}

function clearResult() {
  result.value = "";
}

function insertarLista() {
  // Elemento ul donde se insertará el listado
  var list = document.getElementById("list");

  // Array con los elementos del listado
  //var items = ["Manzana", "Banana", "Naranja", "Pera"];

  list.innerHTML = "";
  // Recorrer el array y crear elementos li para cada item
  for (var i = 0; i < guardado.length; i++) {
    var item = document.createElement("li");
    item.textContent = guardado[i];
    list.appendChild(item);
  }

}
