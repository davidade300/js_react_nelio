const elem = document.getElementById("dados");
const dados = elem.innerHTML;

const lista = dados.split("\n");
const numeros = lista.map((x) => Number(x));

resultado = (numeros[0] * 2 + numeros[1] * 3 + numeros[2] * 5) / 10;
resultado_2 = resultado.toFixed(1);

console.log(resultado_2);
