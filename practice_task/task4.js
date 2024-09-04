// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person'

const wordsArray = statement.split(" ")

// console.log(wordsArray)

const reverseWordsArray = wordsArray.reverse()

// console.log(reverseWordsArray)

const reversedStatement = reverseWordsArray.join(" ")

console.log(reversedStatement)