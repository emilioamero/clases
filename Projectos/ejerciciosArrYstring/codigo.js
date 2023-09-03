let mensaje = 'Programacion 2';

for (let i = 0; i < mensaje.length; i++) {
  console.log(mensaje[i]);
}

for (let i = 0; i < mensaje.length; i++) {
  if (mensaje[i] === ' ') {
    break;
  }
  console.log(mensaje[i]);
}