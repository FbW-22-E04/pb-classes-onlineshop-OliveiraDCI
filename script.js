"use strict";
console.clear();

// PRODUCT
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  containedVAT() {
    const calcVAT = (this.price * 0.16).toFixed(2);
    return calcVAT;
  }
  toText() {
    return `${this.name} - ${(this.price + this.price * 0.16).toFixed(
      2
    )} € in total. - ${this.containedVAT()} € VAT incl. (16%)`;
  }
}

const tracksuit = new Product("Adidas tracksuit", 150.0);
const shoes = new Product("Puma running shoes", 85.99);
const socks = new Product("Socks set", 4.99);

tracksuit.containedVAT();
console.log(tracksuit.toText());
console.log(`${tracksuit.containedVAT()} € VAT incl.`);

// CART
class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(shoppedProduct) {
    if (shoppedProduct instanceof Product) {
      this.products.push(shoppedProduct);
      return `Your shopping cart contains ${this.products.length} products`;
    }
    return `Product is not available in the shop.`;
  }

  getProductInfoCart() {
    for (let item of this.products) {
      console.log(item.toText());
    }
  }

  getTotalItemsPrice() {
    let total = 0;
    for (let item of this.products) {
      total += Number(item.price);
    }
    return `The total for ${
      this.products.length
    } items in your cart amounts to ${total.toFixed(2)}`;
  }
}
console.log("----");
const cart = new Cart();
console.log(cart.addProduct("potato"));
console.log("----");
console.log(cart.addProduct(tracksuit));
console.log(cart.addProduct(shoes));
console.log(cart.addProduct(socks));
console.log("----");
cart.getProductInfoCart();
console.log(cart.getTotalItemsPrice());
