// Exercise 13: Write a function named 'findById' that takes an array of objects and an id, and returns the object with the matching id, or null if not found.
function findById(arr, id) {
  for (e in arr) {
    if (arr[e].id === id) {
      return arr[e]
    }
  }
}

console.log(findById([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }], 2)) // { id: 2, name: 'Jane' }