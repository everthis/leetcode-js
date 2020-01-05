/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const shortestWordDistance = function(words, word1, word2) {
  let l = Infinity
  let r = Infinity
  let res = Infinity
  const same = word1 === word2
  for (let i = 0; i < words.length; i++) {
    if (same) r = l
    if (words[i] === word1) {
      l = i
    } else if (words[i] === word2) {
      r = i
    } else {
      continue
    }
    res = Math.min(res, Math.abs(l - r))
  }
  return res
}
