/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const longestOnes = function (A, K) {
  let i = 0
  let j = 0
  const len = A.length
  while (j < len) {
    if (A[j] === 0) K--
    if (K < 0) {
      if (A[i] === 0) K++
      i++
    }
    j++
  }
  return j - i
}
