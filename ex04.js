// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns an object with the count of each string in the array.


function countOccurrences(arr) {
  let fruits = {}
  for (let i = 0; i < arr.length; i++) {
    if (fruits[arr[i]] === undefined) {
      fruits[arr[i]] = 1
    } else {
      fruits[arr[i]]++
    }
  }
  return fruits
}

console.log(countOccurrences(['apple', 'banana', 'apple'])) // { apple: 2, banana: 1 }