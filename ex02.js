// Exercise 2: Write a function named 'filterByCategory' that takes an array of product objects and a category string, and returns a new array with products that belong to the given category.

let group = []
function filterByCategory(products, category) {
  for (let index = 0; index < products.length; index++) {
    if (products[index].category == category) {
      group.push(products[index])
    }
  } 
  return group
}

console.log(filterByCategory([{ name: 'Apple', category: 'Fruit' }, { name: 'Pineapple', category: 'Fruit' }, { name: 'Watermelon', category: 'Fruit' }, { name: 'Carrot', category: 'Vegetable' }], 'Fruit')) // [{ name: 'Apple', category: 'Fruit' }]
