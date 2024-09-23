// Exercise 12: Write a function named 'filterAdults' that takes an array of user objects (each with an 'age' property) and returns a new array with only the users who are 18 or older.
let ofAge = []
function filterAdults(users) {
  for (e in users) {
    if (users[e].age >= 18) {
      ofAge.push(users[e])
    }
  }
  return ofAge
}

console.log(filterAdults([{ name: 'Jane', age: 18 }, { name: 'Joe', age: 19 }, { name: 'Jim', age: 17 }])) // [{ name: 'Jane', age: 18 }, { name: 'Joe', age: 19 }]