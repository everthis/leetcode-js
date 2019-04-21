/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
const maxSumTwoNoOverlap = function(A, L, M) {
  let n = A.length
  let sum = []
  sum[0] = 0
  for (let i = 0; i < n; i++) sum[i + 1] = sum[i] + A[i]

  let ans = 0
  for (let i = L - 1; i + M < n; ++i) {
    for (let j = i + 1; j + M - 1 < n; ++j) {
      ans = Math.max(ans, sum[i + 1] - sum[i - L + 1] + sum[j + M] - sum[j])
    }
  }
  let tmp = L
  L = M
  M = tmp
  for (let i = L - 1; i + M < n; ++i) {
    for (let j = i + 1; j + M - 1 < n; ++j) {
      ans = Math.max(ans, sum[i + 1] - sum[i - L + 1] + sum[j + M] - sum[j])
    }
  }
  return ans
}
