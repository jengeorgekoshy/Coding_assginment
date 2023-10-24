// JS Task 2 - A
// Take a sentence as an input and reverse every word in that sentence.
// a. Example - This is a sunny day > shiT si a ynnus yad.

const prompt = require('prompt-sync')({ sigint: true })
let str = prompt('Enter the string to be reversed : ')
let words = str.split(' ')
let reversedWords = []

words.forEach(function (word) {
  reversedWords.push(getReverse(word))
})
let reversedString = reversedWords.join(' ')
console.log(reversedString)

function getReverse(str) {
  let reversedWord = ''
  let i = str.length - 1
  while (i >= 0) {
    reversedWord += str[i]
    i--
  }
  return reversedWord
}
