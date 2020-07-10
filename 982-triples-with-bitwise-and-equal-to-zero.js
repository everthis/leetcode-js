/**
 * @param {number[]} A
 * @return {number}
 */
const countTriplets = function (A) {
  const N = 1 << 16,
    M = 3
  const dp = Array.from({ length: M + 1 }, () => Array(N).fill(0))
  dp[0][N - 1] = 1
  for (let i = 0; i < M; i++) {
    for (let k = 0; k < N; k++) {
      for (let a of A) {
        dp[i + 1][k & a] += dp[i][k]
      }
    }
  }
  return dp[M][0]
}
