export default class Product {
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
