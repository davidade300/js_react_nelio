console.log("Operadores aritméticos");
console.log(`3 + 4 = ${3 + 4}`);
console.log(`3 - 4 = ${3 - 4}`);
console.log(`3 * 4 = ${3 * 4}`);
console.log(`19 / 3 = ${19 / 5}`);
console.log(`19 % 5 = ${19 % 5}`);
console.log(`3 ** 4 = ${3 ** 4}`);

console.log("Operadores comparativos");
console.log(`10 > 5 = ${10 > 5}`);
console.log(`10 < 5 = ${10 < 5}`);
console.log(`10 >= 5 = ${10 >= 5}`);
console.log(`10 <= 5 = ${10 <= 5}`);

console.log("\nOperadores comparativos de igualdade");
console.log(`"" == false: ${"" == false}`); // converte para um tipo comum e depois compara
console.log(`"" === false: ${"" === false}`); //compara inclusive o tipo de objeto
console.log(`"17" == 17: ${"17" == 17}`); // converte para um tipo comum e depois compara, por isso True
console.log(`"17" === 17: ${"17" === 17}`); //compara inclusive o tipo de objeto

console.log("\nOperadores comparativos de igualdade");
const x = "Maria";
const y = "Maria";
const a = new String("Maria");
const b = new String("Maria");
console.log(`const x = "Maria"`);
console.log(`const y = "Maria"`);
console.log(`const a = new String("Maria")`);
console.log(`const b = new String("Maria"`);
console.log(`x === y: ${x === y}`);
console.log(`a === b: ${a === b}`);
console.log(`typeof x: ${typeof x}`);
console.log(`typeof a: ${typeof a}`);

console.log("\nOperadores lógicos");
console.log(`(10 > 5) && (10 > 20): ${10 > 5 && 10 > 20}`); // e
console.log(`(10 > 5) && (10 < 20): ${10 > 5 && 10 < 20}`); // e
console.log(`(10 > 5) || (10 > 20): ${10 > 5 || 10 > 20}`); // ou
console.log(`(10 < 5) || (10 > 20): ${10 > 5 && 10 > 20}`); // ou
console.log(`!(10 > 5): ${!(10 > 5)}`); // negacao
