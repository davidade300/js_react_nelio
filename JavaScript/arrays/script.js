// Tamanho do Array

const valores = ["Maria", 37, false, 1.64];
const t1 = valores.length;

console.log("Teste length");
console.log(t1);

// Remover elementos

const nomes = ["Maria", "Joao", "Ana", "Marcos"];
const r1 = nomes.pop(); // remove o ultimo elemento (nada novo)
const r2 = nomes.shift(); // remove o primeiro elemento do Array

console.log("\nTeste pop e shift");
console.log(r1);
console.log(r2);
console.log(nomes);

// INSERIR ELEMENTOS

const alturas = [1.65, 1.82, 1.7];
alturas.push(1.75);
alturas.unshift(1.58); // adiciona como primeiro elemento do array

console.log("\nTESTE push E unshift");
console.log(alturas);

// INSERIR E REMOVER GERAL/QUALQUER LUGAR

const letras = ["A", "B", "C", "D", "E", "F"];

letras.splice(2, 3); //a partir da posicao n, delete y elementos
console.log("TESTE SPLICE");
console.log(letras);

// CONCATENAR ARRAYS

const meninas = ["Maria", "Ana"];
const meninos = ["João", "Marcos"];

const todos = meninas.concat(meninos);
console.log("TESTE CONCAT");
console.log(todos);

// ACESSO E ATRIBUICAO

const idades = [20, 30, 40, 50];

idades[1] = 38;
console.log("ACESSO E ATRIBUICAO");
console.log(idades[1]);

// PERCORRER ARRAY

const frutas = ["bananas", "laranja", "uva"];

console.log("TESTE PERCORRER ARRAY");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

console.log("PERCORRER ARRAY COM FOR EACH");
frutas.forEach((elemento) => {
  // lambda em JS
  console.log(elemento);
});
