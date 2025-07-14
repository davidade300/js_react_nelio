const elem = document.getElementById("dados");
const conteudo = elem.innerHTML;
const resultado = conteudo.split("\n");

console.log(resultado);

const numeros = resultado.map((x) => Number(x));

let maior = numeros[0];

numeros.forEach((element) => {
  if (maior < element) {
    maior = element;
  }
});

console.log(maior);
