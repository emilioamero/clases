/* 
 y and && 

 o or || 

 Not !variable

 distinto !=

 > mayor

 < menor


*/

//And ambas partes deben ser verdaderas

let valor1=0, valor2=10, valor3=20;
let bandera= true;


//valor 2 tiene que ser igual 10 y bandera=true

if (valor2==10 && bandera==true) {
    document.write("Verdadero" + "</br>");
}

if (valor2==10 && bandera==true && valor3==30) {
    document.write("Verdadero" + "</br>");
}else{
    document.write("Falso" + "</br>");
}