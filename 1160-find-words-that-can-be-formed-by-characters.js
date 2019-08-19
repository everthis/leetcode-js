/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = function(words, chars) {
  let letters = new Array(26).fill(0),
    a = 'a'.charCodeAt(0),
    z = 'z'.charCodeAt(0)
  let count = 0
  for (let i = 0; i < chars.length; i++) {
    let l = chars[i].charCodeAt(0) - a
    letters[l]++
  }
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let tmp = letters.slice()
    let tCount = 0
    for (let j = 0; j < word.length; j++) {
      let l = word[j].charCodeAt(0) - a
      tmp[l]--
      if (tmp[l] < 0) {
        break
      } else {
        tCount++
      }
    }
    if (tCount == word.length) {
      count += word.length
    }
  }
  return count
}
