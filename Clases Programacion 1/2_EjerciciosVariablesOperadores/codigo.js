
/* PROGRAMACION 1 - GUIA DE EJERCICIOS */

/* Para poder ejecutar algun codigo descomentarlo 
seleccionadolo y usar el atajo CTRL + A */


/* 2) Solicitar al usuario la edad, si el valor es mayor o igual a 18 mostrar un mensaje
“Puedes ingresar”, sino “Eres menor, no puedes ingresar”
 */

/* let edad=prompt("Ingrese su edad");
if (edad>=18) {
    document.write("Puede Ingresar");
}else{
    document.write("No puede ingresar");
}
 */


/* ------------------------------------------------------------------------ */


/* 3) Solicitar al usuario dos números. Luego mostrar la suma por pantalla.
*/
/* 
let valor1 = prompt("ingrese numero 1");

let valor2 = prompt("ingrese numero 2");

document.write(Number(valor1)+Number(valor2)); */


/* ------------------------------------------------------------------------ */

/* 4) Ingrese 2 variables cantidad de bancos y alumnos. Mostrar si son suficientes o no
en relación a los alumnos */

/* let alumnos=prompt("ingrese cantidad de alumnos");

let bancos=prompt("ingrese cantidad de bancos");

if (bancos>=alumnos) {
    document.write("Los bancos alcanzan.");
}else{
    document.write("Los bancos no alcanzan.");
}
 */


/* ------------------------------------------------------------------------ */

/* 5) Solicitar al usuario dos números. Luego solicitar la operación que desea realizar.
Luego mostrar la operación por pantalla. */
/* 
let valor1 = prompt("Ingrese numero 1.");

let valor2 = prompt("Ingrese numero 2.");

let sign = prompt("Ingrese operacion a realizar.");


switch (sign) {
    case "+":
            document.write(Number(valor1)+Number(valor2));//se puede usar en vez de number parsInt()
        break;

        case "-":
            document.write(Number(valor1)-Number(valor2));
        break;

        case "*":
            document.write(Number(valor1)*Number(valor2));
        break;

        case "/":
            document.write(Number(valor1)/Number(valor2));
        break;

    default:
        break;
}
 */


/* ------------------------------------------------------------------------ */

/* 6) Ingresar el número del mes y mostrar en pantalla el nombre de ese mes */

/* 
let numes=prompt("ingrese numero del mes")
switch ( parseInt(numes)) {
    case 1: document.write("El mes ingresado es Enero.");
        break;
    case 2: document.write("El mes ingresado es Febrero.");
        break;
    case 3: document.write("El mes ingresado es Marzo.");
        break;
    case 4: document.write("El mes ingresado es Abril.");
        break;
    case 5: document.write("El mes ingresado es Mayo.");
        break;
    case 6: document.write("El mes ingresado es Junio.");
        break;
    case 7: document.write("El mes ingresado es Julio."); 
        break;
    case 8: document.write("El mes ingresado es Agosto.");
        break;
    case 9: document.write("El mes ingresado es Septiembre.");
        break;
    case 10: document.write("El mes ingresado es Octubre.");
        break;
    case 11: document.write("El mes ingresado es Noviembre.");
        break;
    case 12: document.write("El mes ingresado es Diciembre.");   
        break;
    default: document.write("Valor Incorrecto");
        break;
}
 */


/* ------------------------------------------------------------------------ */


/* 7) Ingresar 2 notas de un alumno, sacar el promedio si el promedio es mayor a siete
mostrar "el alumno está promocionado" caso contrario mostrar "el alumno no esta
promocionado" */

/* let nota1 = prompt("Ingrese primera nota.");

let nota2 = prompt("Ingrese segunda nota.");

let promedio = ((Number(nota1)+Number(nota2))/2);

if (promedio>=7) {
    document.write("El alumno esta promocionado.");
} else {
   document.write("El alumno no esta promocionado.") ;
} */



/* ------------------------------------------------------------------------ */


/* 8) Codificar el siguiente programa de Pseudo Codigo a JavaScrip:
Proceso sin_titulo
// ingresar 3 números distintos entre si
// mostrar cual de los 3 es el mayor y
// cual es el valor numerico mayor
Definir numero1, numero2, numero3, numero_mayor Como Real
Definir texto_salida Como Caracter
Escribir "ingrese 1º número"
leer numero1
Escribir "ingrese 2º número"
leer numero2
Escribir "ingrese 3º número"
leer numero3
si numero1 > numero2 Entonces
// numero1 es el mayor hasta ahora
si numero1 > numero3 Entonces
texto_salida = "1"
numero_mayor = numero1
SiNo
texto_salida = "3"
numero_mayor = numero3
FinSi
Analista de Sistemas - Programacion 1
SiNo
// numero2 es el mayor hasta ahora
si numero2 > numero3 Entonces
numero_mayor = numero2
texto_salida = "2"
SiNo
texto_salida = "3"
numero_mayor = numero3
FinSi
FinSi
Escribir "el nº ",texto_salida," es el mayor"
Escribir "el valor numerico mayor es: ", numero_mayor
FinProceso */


/* Solucion 1 ejercicio 8*/

/* let num1 = prompt ("Ingrese primer numero.");
let num2 = prompt ("Ingrese segundo numero.");
let num3 = prompt ("Ingrese tercer numero.");

document.write(Math.max(num1, num2, num3));
 */



/* ------------------------------------------------------------------------ */
/* Solucion 2 ejercicio 8*/


/*
let numero1 = 0.0,
  numero2 = 0.0,
  numero3 = 0.0,
  numero_mayor = 0.0;

let texto_salida = "";


numero1= parseFloat(prompt("Ingrese el Primer Número."));
numero2= parseFloat(prompt("Ingrese el Segundo Número."));
numero3= parseFloat(prompt("Ingrese el Tercer Número."));

if (numero1 > numero2) {
    if (numero1 > numero3) {
        texto_salida = "1"
        numero_mayor = numero1
    } else {
        texto_salida = "3"
        numero_mayor = numero3
    }

} else {

    if (numero2 > numero3) {
            numero_mayor = numero2
    texto_salida = "2"
    } else {
         texto_salida = "3"
    numero_mayor = numero3
    }
    
}

document.write(`El valor numerico mayor es: ${numero_mayor}.`) */

/* Generar una solucion que mediante la carga
controle que los numeros no se repitan */