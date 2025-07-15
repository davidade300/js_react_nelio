function soma(num1, num2) {
  return num1 + num2;
}

const soma2 = function (num1, num2) {
  return num1 + num2;
};

const soma3 = (num1, num2) => {
  return num1 + num2;
};

const soma4 = (num1, num2) => num1 + num2;

const dobro1 = function (num) {
  return num * 2;
};

const dobro2 = (num) => num * 2;

// FUNCAO QUE NAO TEM RETORNO DEFINIDO, POR PADRAO RETORNA UNDEFINED

function mostarPreco(preco) {
  console.log("preco = " + preco);
}

// VARIAVEIS DEFINIDAS DENTRO DO ESCOPO DA FUNCAO NAO VAZAM ESCOPO

function areaCirculo(raio) {
  var pi = 3.14;
  return pi * raio * raio;
}

// FUNCTION HOISTING: FUNCOES NO JS SAO "MOVIDAS" PARA CIMA CIMA PELO MOTOR DO JS

teste(10);

function teste(x) {
  console.log("Teste = " + x);
}

// FUNCOES PODEM SER PASSADAS COMO ARGUMENTO

function triplo(num) {
  return num * 3;
}

function aplicar(f, num) {
  const result = f(num);
  console.log("Resultado = " + result);
}

aplicar(triplo, 10);
