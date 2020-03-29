/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
const findPaths = function (m, n, N, i, j) {
  const dp = [...Array(2)].map((_) =>
    [...Array(50)].map((_) => Array(50).fill(0))
  )
  while (N-- > 0) {
    for (let i = 0; i < m; i++) {
      for (let j = 0, nc = (N + 1) % 2, np = N % 2; j < n; j++) {
        dp[nc][i][j] =
          ((i === 0 ? 1 : dp[np][i - 1][j]) +
            (i === m - 1 ? 1 : dp[np][i + 1][j]) +
            (j === 0 ? 1 : dp[np][i][j - 1]) +
            (j === n - 1 ? 1 : dp[np][i][j + 1])) %
          1000000007
      }
    }
  }
  return dp[1][i][j]
}
