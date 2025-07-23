// Promisse é uma função construtora

function f(g, h) {
  // funcao f ou rejeita ou aceita a promise
  setTimeout(() => {
    if (10 > 0) {
      g("P");
    } else {
      h("Q");
    }
  }, 3000);
}

function executarSeRejeitar(valor) {
  console.log("reijeitada com o valor " + valor);
}

const minhaPromise = new Promise(f);

minhaPromise
  .then((valor) => {
    console.log("resolveu com o valor " + valor);
    // se a promisse for resolvida a função then executa a função passada como argumento
  })
  .catch((valor) => {
    console.log("reijeitada com o valor " + valor);
  });

console.log(minhaPromise);
