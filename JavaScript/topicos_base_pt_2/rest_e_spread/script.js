//REST: valores passados com virgula => array

//...numbers indica que vai ser um vetor
function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}

const result1 = sum(1, 2, 3, 4);
console.log(result1);

const result2 = Math.max(2, 5, 3, 9);
console.log(result2);

// SPREAD: array => transforma array em valores separados por virgula

const myNumbers = [2, 3, 10, 5];
const result3 = Math.max(...myNumbers);
console.log(result3);

// SPREAD: objetos => valores separados por virgula

const item = {
  description: "Computador",
  price: 3000.0,
  quantity: 1,
};

const obj = { ...item }; // espalha os dados de item em valores separados por virgula
console.log(obj);

const cloneItemPlus = { ...item, weight: 10 }; // é possível inclusive adicionar coisas.
console.log(cloneItemPlus);
