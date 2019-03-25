/**
 * @param {string[]} grid
 * @return {number}
 */
const regionsBySlashes = function(grid) {
  const len = grid.length
  let regionsNum = 0
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]]
  const matrix = Array.from({ length: 3 * len }, () => new Array(3 * len).fill(0))

  // 把每个格子切成3 * 3个小格子，再标记出现线段的位置
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (grid[i][j] === '/') matrix[i * 3][j * 3 + 2] = matrix[i * 3 + 1][j * 3 + 1] = matrix[i * 3 + 2][j * 3] = 1
      if (grid[i][j] === '\\') matrix[i * 3][j * 3] = matrix[i * 3 + 1][j * 3 + 1] = matrix[i * 3 + 2][j * 3 + 2] = 1
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) {
        dfs(matrix, i, j, dirs)
        regionsNum++
      }
    }
  }
  return regionsNum
}
function dfs(m, i, j, dirs) {
  if (i >= 0 && j >= 0 && i < m.length && j < m.length && m[i][j] === 0) {
    m[i][j] = 1
    for (let dir of dirs) dfs(m, i + dir[0], j + dir[1], dirs)
  }
}
