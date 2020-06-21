/**
 * @param {string} word
 * @return {number}
 */
const minimumDistance = function (word) {
  const dp = Array.from({ length: 2 }, () =>
    new Array(27).fill(0).map(() => Array(27).fill(0))
  )
  const A = 'A'.charCodeAt(0)
  for (let pos = word.length - 1; pos >= 0; --pos) {
    let to = word[pos].charCodeAt(0) - A
    for (let i = 0; i < 27; ++i) {
      for (let j = 0; j < 27; ++j) {
        dp[pos % 2][i][j] = Math.min(
          dp[(pos + 1) % 2][to][i] + cost(j, to),
          dp[(pos + 1) % 2][to][j] + cost(i, to)
        )
      }
    }
  }
  return dp[0][26][26]
}
function cost(from, to) {
  if (from === 26) return 0
  return (
    Math.abs(((from / 6) >> 0) - ((to / 6) >> 0)) +
    Math.abs((from % 6) - (to % 6))
  )
}
