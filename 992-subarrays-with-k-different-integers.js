/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const subarraysWithKDistinct = function(A, K) {
  let res = 0
  let prefix = 0
  const m = new Array(A.length + 1).fill(0)
  for (let i = 0, j = 0, cnt = 0; i < A.length; i++) {
    if (m[A[i]]++ === 0) cnt++
    if (cnt > K) {
      m[A[j++]]--
      cnt--
      prefix = 0
    }
    while (m[A[j]] > 1) {
      prefix++
      m[A[j++]]--
    }
    if (cnt === K) res += prefix + 1
  }
  return res
}
