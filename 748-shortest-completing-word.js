/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = function(licensePlate, words) {
  const letters = licensePlate
    .replace(/\d/g, '')
    .replace(/ /g, '')
    .toLowerCase()
    .split('')
  let matchingWords = words.filter(word => {
    let completingWord = true
    letters.forEach(letter => {
      let letterIndex = word.indexOf(letter)
      if (letterIndex > -1) {
        let re = new RegExp(letter)
        word = word.replace(re, '')
      } else {
        completingWord = false
      }
    })
    return completingWord
  })
  const wordLengths = matchingWords.map(word => word.length)
  return matchingWords[wordLengths.indexOf(Math.min.apply(Math, wordLengths))]
}

// another

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = function(licensePlate, words) {
  licensePlate = licensePlate.toLowerCase()
  const plateCount = Array(26).fill(0)
  let plateLength = 0
  for (let i = 0; i < licensePlate.length; i += 1) {
    const code = licensePlate.charCodeAt(i)
    if (code < 97 || code > 122) {
      continue
    }
    plateCount[code - 97] += 1
    plateLength += 1
  }
  const longerOrEqualWords = words.filter(word => word.length >= plateLength)
  return longerOrEqualWords.reduce((shortest, word) => {
    if (shortest && shortest.length <= word.length) {
      return shortest
    }
    const wordCount = Array(26).fill(0)
    for (let i = 0; i < word.length; i += 1) {
      const code = word.charCodeAt(i)
      wordCount[code - 97] += 1
    }
    for (let i = 0; i < 26; i += 1) {
      if (wordCount[i] - plateCount[i] < 0) {
        return shortest
      }
    }
    return word
  }, null)
}
