// PEGAR DADOS DE UM ELEMENTO HTML

const elem = document.getElementById("dados");
console.log(elem);

// PEGAR CONTEUDO DE UM ELEMENTO HTML

const conteudo = elem.innerHTML;
console.log(conteudo);

// COMO FATIAR STRING COM BASE EM UM SEPARADOR

const nome = "Maria Silva Costa";
const resultado_nome = nome.split(" ");
console.log(resultado_nome);

const resultado = conteudo.split("\n");
console.log(resultado);

// COMO CONVERTER UM ARRAY DE STRINGS EM UM ARRAY DE NUMEROS

const str = "4.5";
console.log(str);

const n = Number(str);
console.log(n);

const numeros = resultado.map((x) => Number(x)); // para cada elemento x, transforme em Number(x)
console.log(numeros);

// COMO MOSTRAR UM NUMERO COM ARREDONDAMENTO
const x = 3.456;

console.log(x.toFixed(2));
