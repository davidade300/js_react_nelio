/**
 * Classes em JS sao syntatic sugar para funcoes construtoras e prototypes
 *
 * É apenas uma forma alternativa de se escrever um tipo com propriedades e metodos.
 * Mas internamente a estrutura será a mesma, baseada em protorypes.
 */

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  total() {
    return this.price * this.quantity;
  }

  add(ammount) {
    this.quantity += ammount;
  }

  remove(ammount) {
    if (this.quantity >= ammount) {
      this.quantity -= ammount;
    }
  }

  label() {
    return "Dados: " + this.name + ", " + this.price.toFixed(2);
  }
}

const p1 = new Product("monitor", 800, 10);
const p2 = new Product("Mouse", 50, 4);
