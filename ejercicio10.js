function contarLetras(texto) {
  texto = texto.toLowerCase();
  let resultado = {};

  for (let letra of texto) {
    if (/[a-záéíóúüñ]/i.test(letra)) {
      if (resultado[letra]) {
        resultado[letra]++;
      } else {
        resultado[letra] = 1;
      }
    }
  }
  return resultado;
}

console.log(contarLetras("banana")); 

