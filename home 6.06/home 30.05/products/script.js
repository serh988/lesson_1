const products = [
  {
    title: "Nike",
    price: 300,
    type: "shoes"
  },
  {
    title: "Puma",
    price: 400,
    type: "shoes"
  }, 
  {
    title: "BMW",
    price: 7000,
    type: "car"
  },
  {
    title: "Chanel",
    price: 1200,
    type: "perfume"
  }
];

const affordableProducts = [];

products.forEach(product => {
  if (product.price < 1000) {
    affordableProducts.push(product);
  }
});

console.log(affordableProducts);
