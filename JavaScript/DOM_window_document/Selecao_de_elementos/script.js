/**
 *
 */

const item1 = document.querySelector("li");
console.log(item1);
console.log(item1.innerHTML); // conteudo do elemento
console.log(item1.outerHTML); // html do proprio elemento

const itens = document.querySelectorAll("li");
console.log(itens);

const card1 = document.querySelector(".card");
console.log(card1);

//manipulando o dom
const paragrafo = document.createElement("p");
paragrafo.innerHTML = "Descricao";

card1.appendChild(paragrafo);
card1.classList.add("super-border");

const cards = document.querySelectorAll(".card");
// const cards = document.getElementsByClassName("card"); // -> array like (parecido com array mas não é)
console.log(cards);

cards_array = Array.from(cards).map((item) => {
  console.log(item.innerHTML);
});

// [...cards].map((item) => {
//   console.log(item);
// });
