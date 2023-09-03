
function dato(){
    let campo1 = document.getElementById('txtCampotexto');
    let campo2 = document.getElementById('parrafo');

campo1.value = 'Hola';

campo2.innerHTML = 'Hola';
}


let i =prompt('ingrese');

for (let index = 0; index < i; index++) {
    console.log(index);
    
}


//Ejercicios con JS -

/* 



*/






/*En una entidad educativa para que un alumno apruebe un examen, se necesita que obtenga al menos un 4 
que representa el 60% del examen bien realizado.
Dicho calculo se obtiene obteniendo el algoritmo en base 10 de esa calificacion. 
Por ejemplo para una nota de 4: log(4)=0.6020599913279624 que en porcentaje es el 60.21% del examen aprobado.
Su operacion inversa es la potencia, cuya base es 10 y el exponente es el porcentaje en decimal.
Por ejemplo, si un alumno obtuvo el 61% del examen, 61/100=0.61, la potencia quedaria  10^0.61 = 4. Su nota es 4.

Aclaracion 1: En JavaScrip para obtener el algoritmo en base 10 de un numero se utiliza la funcion:  Math.log10(<numero>).
Aclaracion 2: En JS la potencia se realiza con la siguiente funcion: Math.pow(base, exponente);
Aclaracion 3: Para que los valores se expresen con dos decimales se puede utilizar el metodo .toFixed(<cantidaddecimales>)
let numero=12.23255;
let resultado = numero.toFixed(2) // se muestra 12.23 

Agregar un boton en pantalla por cada punto;

a) Generar una funcion en JS que solicite el porcentaje del examen aprobado de un alumno, luego debe mostrarse la nota obtenida (document.write).
con el siguiente texto. 

El porcentaje <valorIngresado> % corresponde a la nota <valornota>
ej. El porcentaje 60.21 % corresponde a la nota 4.



b) Generar una funcion que imprima en pantalla (document.write) las calificaciones del 1 al 10, los valores
resultantes por la funcion logaritmo, debe ser expresados en porcentajes y con el siguiente texto:

La nota <numeroDeNota> representa el <numeroenporcentaje> % del examen aprobado.
Ej:  La nota 4 representa el 60.21 % del examen aprobado.




*/





/* for (let index = 0; index <= 10; index++) {
document.write(index + ' ' + ((Math.log10(index) * 100).toFixed(2)) + `%` + '<br>')


}
 */
