// Exercise 1: Write a function named 'sumPrices' that takes an array of product objects (each with a 'price' property) and returns the total sum of all prices.

let total = 0
function sumPrices(products) {
  for (let index = 0; index < products.length; index++) {
    total += products[index].price
  }
  return total
}

console.log(sumPrices([{ price: 10 }, { price: 20 }, { price: 30 }])) // 60
