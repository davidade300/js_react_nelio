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

// CONCATENAR ARRAYS

const meninas = ["Maria", "Ana"];
const meninos = ["João", "Marcos"];
