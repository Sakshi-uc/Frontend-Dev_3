class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percentage) {
    const discountAmount = (this.price * percentage) / 100;
    return this.price - discountAmount;
  }

  displayDetails() {
    return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Category: ${this.category}`;
  }
}

const product1 = new Product(1, "Laptop", 1500, "Electronics");
const product2 = new Product(2, "Mouse", 25, "Accessories");
const product3 = new Product(3, "Keyboard", 80, "Accessories");
const product4 = new Product(4, "Monitor", 300, "Electronics");
const product5 = new Product(5, "Headphones", 1200, "Audio");

const products = [product1, product2, product3, product4, product5];

console.log("Product with 10% discount:");
console.log(`${product1.name} - Original: $${product1.price}, After 10% discount: $${product1.applyDiscount(10)}`);

console.log("\nAll Product Details:");
products.forEach(product => {
  console.log(product.displayDetails());
});

console.log("\nProducts with price > 1000:");
const expensiveProducts = products.filter(product => product.price > 1000);
expensiveProducts.forEach(product => {
  console.log(product.displayDetails());
});