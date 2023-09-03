




async function getData() {
  let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
  let response = await fetch(url);



  let commits = await response.json(); // leer respuesta del cuerpo y devolver como JSON

  let ret = commits[1].author.login;
 
  document.write(ret);
  return ret;
}


test = getData();
console.log(test)


