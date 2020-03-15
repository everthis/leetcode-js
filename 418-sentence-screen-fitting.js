/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
const wordsTyping = function(sentence, rows, cols) {
  let start = 0
  const s = sentence.join(' ') + ' '
  const l = s.length
  for (let i = 0; i < rows; i++) {
    start += cols
    while (start >= 0 && s[start % l] !== ' ') start--
    start++
  }
  return Math.floor(start / l)
}
