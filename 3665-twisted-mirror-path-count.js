const mod = 1e9 + 7
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePaths = function (grid) {
  const n = grid.length
  const m = grid[0].length

  const dp = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => Array(2).fill(-1)),
  )

  return fn(grid, 0, 0, dp, n, m, 0)
}

function fn(grid, i, j, dp, n, m, dir) {
  if (i >= n || j >= m) return 0

  if (i === n - 1 && j === m - 1) return 1

  if (dp[i][j][dir] !== -1) return dp[i][j][dir]

  if (grid[i][j] === 1) {
    if (dir === 1) {
      return fn(grid, i + 1, j, dp, n, m, 0)
    } else if (dir === 0) {
      return fn(grid, i, j + 1, dp, n, m, 1)
    }
  }

  let move = 0
  if (j + 1 < m && (grid[i][j + 1] === 0 || grid[i][j + 1] === 1)) {
    move += fn(grid, i, j + 1, dp, n, m, 1)
  }

  if (i + 1 < n && (grid[i + 1][j] === 0 || grid[i + 1][j] === 1)) {
    move += fn(grid, i + 1, j, dp, n, m, 0)
  }

  dp[i][j][dir] = move % mod
  return dp[i][j][dir]
}
