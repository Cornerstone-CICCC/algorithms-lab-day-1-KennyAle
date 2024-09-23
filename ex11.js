// Exercise 11: Write a function named 'reverseWords' that takes a string of text and returns the string with the order of the words reversed.

function reverseWords(text) {
    let sentence = text.split(' ')
    let reversedSentence = ''
    for (let index = sentence.length - 1; index >= 0; index--) {
      const element = sentence[index]
      reversedSentence += `${element} `
    }
    return reversedSentence
}

console.log(reverseWords('The quick brown fox')) // 'fox brown quick The'