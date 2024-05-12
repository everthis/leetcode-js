/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function (grid) {
  const rows = grid.length
  const cols = grid[0].length
  const dp = new Array(rows)
    .fill()
    .map(() => new Array(cols).fill(-Infinity))

  dp[rows - 1][cols - 1] = grid[rows - 1][cols - 1]

  let res = -Infinity

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      if (i < rows - 1) {
        dp[i][j] = Math.max(dp[i][j], dp[i + 1][j])
      }

      if (j < cols - 1) {
        dp[i][j] = Math.max(dp[i][j], dp[i][j + 1])
      }

      dp[i][j] = Math.max(dp[i][j], grid[i][j])
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i < rows - 1) {
        res = Math.max(res, dp[i + 1][j] - grid[i][j])
      }
      if (j < cols - 1) {
        res = Math.max(res, dp[i][j + 1] - grid[i][j])
      }
    }
  }
  return res
}
