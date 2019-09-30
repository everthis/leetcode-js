/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
  const M = s.length
  const N = p.length
  let i = 0,
    j = 0,
    lastMatchInS,
    lastStarPos
  while (i < M) {
    if (j < N && (p[j] === s[i] || p[j] === '?')) {
      i++
      j++
    } else if (j < N && p[j] === '*') {
      lastStarPos = j
      j++
      lastMatchInS = i
    } else if (lastStarPos !== undefined) {
      // back to previous step
      j = lastStarPos + 1
      lastMatchInS++
      i = lastMatchInS
    } else {
      return false
    }
  }
  while (j < N && p[j] === '*') {
    j++
  }
  return j === N
}
