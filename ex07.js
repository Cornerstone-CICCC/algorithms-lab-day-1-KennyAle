// Exercise 7: Write a function named 'calculateAverage' that takes an array of numbers and returns the average value.

let sum = 0
function calculateAverage(arr) {
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
  }
  let average = sum / arr.length
  return average
}

console.log(calculateAverage([10, 20, 30, 40, 50])) // 30