// Exercise 6: Write a function named 'uniqueValues' that takes an array of values and returns a new array with only unique values, removing duplicates.

let unique = []
function uniqueValues(arr) {
  for (element of arr) {
    if (unique.includes(element)) {
    } else {
      unique.push(element)
    }
  } 
  return unique
}

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])) // [1, 2, 3, 4, 5]