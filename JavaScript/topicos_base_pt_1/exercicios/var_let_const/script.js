const x = 10;
/*
const para valores imutáveis
let para variaveis que mudam
var não é aconselhado usar pois vaza escopo (de estrutura)

ou seja é mais interessante usar const pela imutabilidade, afinal variaveis não devem sair mudando de valor
*/
if (x > 0) {
  var a = 100;
  let b = 200;
  const c = 300;

  console.log("imprimindo dentro do if");
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log("imprimindo fora do if");
console.log(a); // vazamento de escopo, a é impresso e foi criado em uma estrutura
console.log(b);
console.log(c);

console.log("Imprimindo resultado do for");

for (let i = 0; i < 5; i++) {
  // aqui é interessante que seja let pois o valor muda
  console.log(i);
}
