// Exercise 3: Write a function named 'getFullNames' that takes an array of user objects (each with 'firstName' and 'lastName' properties) and returns an array of full names (e.g., 'John Doe'). 

let fullNames = []

function getFullNames(users) {
  for (let index = 0; index < users.length; index++) {
    const element = users[index].firstName + ' ' + users[index].lastName
    fullNames.push(element)
  }
  return fullNames
}

console.log(getFullNames([{ firstName: 'John', lastName: 'Doe' }, { firstName: 'Jane', lastName: 'Doe' }])) // ['John Doe', 'Jane Doe']
