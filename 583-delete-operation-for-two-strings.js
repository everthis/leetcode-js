/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2, memo = new Map()) {
  if (word1 === word2) return 0
  if (word1 === '' || word2 === '') return Math.max(word1.length, word2.length)
  const len1 = word1.length
  const len2 = word2.length
  if (memo.has(`${word1}-${word2}`)) return memo.get(`${word1}-${word2}`)
  let res
  if (word1[len1 - 1] === word2[len2 - 1]) {
    res = minDistance(word1.slice(0, len1 - 1), word2.slice(0, len2 - 1), memo)
  } else {
    res =
      1 +
      Math.min(
        minDistance(word1.slice(0, len1 - 1), word2, memo),
        minDistance(word1, word2.slice(0, len2 - 1), memo)
      )
  }
  memo.set(`${word1}-${word2}`, res)
  return res
}
