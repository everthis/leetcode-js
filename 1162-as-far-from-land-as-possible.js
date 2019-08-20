/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxDistance = function(grid) {
  let m = grid.length
  let n = m === 0 ? 0 : grid[0].length
  let dp = new Array(m + 2)
  for (let i = 0; i < m + 2; i++) {
    dp[i] = new Array(n + 2).fill(Number.POSITIVE_INFINITY)
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (grid[i - 1][j - 1] === 0) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1
      } else {
        dp[i][j] = 0
      }
    }
  }
  let res = Number.NEGATIVE_INFINITY
  for (let i = m; i >= 1; i--) {
    for (let j = n; j >= 1; j--) {
      if (grid[i - 1][j - 1] === 0) {
        dp[i][j] = Math.min(dp[i][j], Math.min(dp[i + 1][j], dp[i][j + 1]) + 1)
        res = Math.max(res, dp[i][j])
      }
    }
  }
  return isFinite(res) ? res : -1
}
