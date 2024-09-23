// Exercise 10: Write a function named 'formatDate' that takes a date string (in the format 'YYYY-MM-DD') and returns a formatted date string (e.g., 'January 1, 2022').

let months = [
  'January', 
  'February', 
  'March', 
  'April', 
  'May', 
  'Jun', 
  'July', 
  'August', 
  'September', 
  'October', 
  'November', 
  'December'
]

function formatDate(dateStr) {
  let date = dateStr.split('-')
  let formatted = `${months[parseInt(date[1]) - 1]} ${parseInt(date[2])}, ${date[0]}`
  return formatted
}

console.log(formatDate('2022-01-01')) // 'January 1, 2022'