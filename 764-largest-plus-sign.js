/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
const orderOfLargestPlusSign = function (N, mines) {
  const dp = [...Array(N)].map((_) => Array(N).fill(N))
  mines.map((m) => {
    dp[m[0]][m[1]] = 0
  })
  for (let i = 0; i < N; i++) {
    for (let j = 0, k = N - 1, l = (r = u = d = 0); j < N; j++, k--) {
      dp[i][j] = Math.min(dp[i][j], (l = dp[i][j] == 0 ? 0 : l + 1))
      dp[i][k] = Math.min(dp[i][k], (r = dp[i][k] == 0 ? 0 : r + 1))
      dp[j][i] = Math.min(dp[j][i], (d = dp[j][i] == 0 ? 0 : d + 1))
      dp[k][i] = Math.min(dp[k][i], (u = dp[k][i] == 0 ? 0 : u + 1))
    }
  }
  let max = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      max = Math.max(dp[i][j], max)
    }
  }
  return max
}
