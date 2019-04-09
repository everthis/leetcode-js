/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function(obstacleGrid) {
  const rows = obstacleGrid.length
  const cols = obstacleGrid[0].length
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(0))
  if (obstacleGrid[0][0] === 1) return 0
  else dp[0][0] = 1
  let firstRowOneIdx
  let firstColOneIdx
  for (let i = 0; i < cols; i++) {
    if (obstacleGrid[0][i] === 1) {
      firstRowOneIdx = i
      break
    } else {
      dp[0][i] = 1
    }
  }
  for (let i = 0; i < rows; i++) {
    if (obstacleGrid[i][0] === 1) {
      firstColOneIdx = i
      break
    } else {
      dp[i][0] = 1
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (obstacleGrid[i][j] !== 1) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[rows - 1][cols - 1]
}
