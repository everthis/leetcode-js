/**
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = function (matrix) {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  const m = matrix.length,
    n = matrix[0].length
  let res = 1
  const memo = Array.from({ length: m }, () => Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const tmp = dfs(matrix, i, j, m, n, memo, dirs)
      res = Math.max(tmp, res)
    }
  }
  return res
}

function dfs(matrix, i, j, m, n, memo, dirs) {
  if (memo[i][j] !== 0) return memo[i][j]
  let res = 1
  for (let [dx, dy] of dirs) {
    const nx = i + dx,
      ny = j + dy
    if (
      nx < 0 ||
      nx >= m ||
      ny < 0 ||
      ny >= n ||
      matrix[nx][ny] <= matrix[i][j]
    )
      continue
    const tmp = 1 + dfs(matrix, nx, ny, m, n, memo, dirs)
    res = Math.max(res, tmp)
  }
  memo[i][j] = res
  return res
}
