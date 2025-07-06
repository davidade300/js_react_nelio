console.log("Um string literal pode ficar entre aspas duplas");
console.log("Um string literal pode ficar entre aspas simples");
console.log(`Um string literal pode ficar entre crases`); // é possível interpolar com string crazeada

console.log("Concatenação e interpolação");
const num = 14.5;

console.log("o valor do produto é " + num);
console.log("o valor do produto é " + num);
console.log(`o valor do produto é ${num}`); //interpolacao de string, é possível inserir uma expressao aqui

console.log("Converssao entre number e string");

const str1 = num.toString();
console.log(`Tipo de ${str1} é ${typeof str1}`);

const str2 = num.toFixed(2);
console.log(`Tipo de ${str2} é ${typeof str2}`);

const num1 = Number("14.5");
console.log(`Tipo de ${num1} é ${typeof num1}`);

const num2 = parseInt("21", /*base do numero*/ 10);
console.log(`Tipo de ${num2} é ${typeof num2}`);

const num3 = parseInt("21", /*base do numero*/ 16); //base hexadecimal
console.log(`Tipo de ${num3} é ${typeof num3}`);

const num4 = parseFloat("21.34", /*base do numero*/ 16); //base hexadecimal
console.log(`Tipo de ${num4} é ${typeof num4}`);

const str = "Maria Silva  ";
console.log(`const str = "Maria Silva  "`);

const resultado = str.toLowerCase();
console.log(resultado);

console.log(`toLowerCase: ${str.toLowerCase()}`);
console.log(`toUpperCase: ${str.toUpperCase()}`);

console.log(`charAt: ${str.charAt(3)}`);
console.log(`charAt: ${str[2]}`);

console.log(`replace: ${str.replace("i", "$")}`); // substitui a primeira ocorrencia
console.log(`replace: ${str.replace(/i/g, "$")}`); // substitui todas as ocorrencias

console.log(`length: ${str.length}`); //propriedade

console.log(`indexOf: ${str.indexOf("i")}`); // primeira ocorrencia
console.log(`lastIndexOf: ${str.lastIndexOf("i")}`); // ultima ocorrencia

console.log(`substring: ${str.substring(3, 8)}`); // funciona igual ao python, indice final -1

const data = "14/10/2021";

const mes = Number(data.substring(3, 5));
console.log(mes);

const valor = 200.99;

const novoValor = valor.toString().replace(".", ",");
console.log(novoValor);

console.log(`trim: ${str.trim()}`); // limpa espacos em branco
