/**
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = function(matrix) {
  if (matrix.length === 0) return 0
  let max = 1
  const rows = matrix.length
  const cols = matrix[0].length
  const cache = Array.from({ length: rows }, () => new Array(cols).fill(0))
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let len = dfs(matrix, i, j, rows, cols, cache, dirs)
      max = Math.max(max, len)
    }
  }
  return max
}

function dfs(matrix, i, j, rows, cols, cache, dirs) {
  if (cache[i][j] !== 0) return cache[i][j]
  let max = 1
  for (let dir of dirs) {
    let ii = i + dir[0]
    let jj = j + dir[1]
    if (ii < 0 || ii >= rows || jj < 0 || jj >= cols || matrix[ii][jj] <= matrix[i][j]) continue
    let len = 1 + dfs(matrix, ii, jj, rows, cols, cache, dirs)
    max = Math.max(len, max)
  }
  cache[i][j] = max
  return max
}
