/**
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
const minDistance = function (A, K) {
  A.sort((a, b) => a - b)
  let n = A.length,
    B = new Array(n + 1).fill(0),
    dp = Array(n).fill(0)
  for (let i = 0; i < n; ++i) {
    B[i + 1] = B[i] + A[i]
    dp[i] = 1e6
  }
  for (let k = 1; k <= K; ++k) {
    for (let j = n - 1; j > k - 2; --j) {
      for (let i = k - 2; i < j; ++i) {
        let m1 = ((i + j + 1) / 2) >> 0,
          m2 = ((i + j + 2) / 2) >> 0
        let last = B[j + 1] - B[m2] - (B[m1 + 1] - B[i + 1])
        dp[j] = Math.min(dp[j], (i >= 0 ? dp[i] : 0) + last)
      }
    }
  }
  return dp[n - 1]
}
