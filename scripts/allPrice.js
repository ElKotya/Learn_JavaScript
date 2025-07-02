const products = [
{ name: "Ноутбук", price: 5000, quantity: 12 },
{ name: "Телефон", price: 520, quantity: 4 },
{ name: "Планшет", price: 4320, quantity: 2 }
];

const getTotalValue = products.reduce((total, products) => {
  return total + products.price
}, 0);

console.log("Общая сумма:", getTotalValue);
