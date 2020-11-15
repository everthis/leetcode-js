/**
 * @param {number} m
 * @param {number} n
 * @param {number} introvertsCount
 * @param {number} extrovertsCount
 * @return {number}
 */
const getMaxGridHappiness = function (m, n, introvertsCount, extrovertsCount) {
  const grid = Array.from({ length: m }, () => Array(n).fill(0))
  return dfs(grid, 0, 0, introvertsCount, extrovertsCount, 0)

  function dfs(grid, row, col, int, ex, happy) {
    const M = grid.length,
      N = grid[0].length
    if (row == M - 1 && col == N) return happy
    if (col == N) {
      col = 0
      ++row
    }
    let res = dfs(grid, row, col + 1, int, ex, happy)
    if (int > 0) {
      grid[row][col] = 1
      let h = happy + 120
      if (row > 0 && grid[row - 1][col] != 0) {
        if (grid[row - 1][col] == 1) h += -30 - 30
        else h += 20 - 30
      }
      if (col > 0 && grid[row][col - 1] != 0) {
        if (grid[row][col - 1] == 1) h += -30 - 30
        else h += 20 - 30
      }
      res = Math.max(res, dfs(grid, row, col + 1, int - 1, ex, h))
      grid[row][col] = 0
    }
    if (ex > 0) {
      grid[row][col] = 2
      let h = happy + 40
      if (row > 0 && grid[row - 1][col] != 0) {
        if (grid[row - 1][col] == 1) h += 20 - 30
        else h += 20 + 20
      }
      if (col > 0 && grid[row][col - 1] != 0) {
        if (grid[row][col - 1] == 1) h += 20 - 30
        else h += 20 + 20
      }
      res = Math.max(res, dfs(grid, row, col + 1, int, ex - 1, h))
      grid[row][col] = 0
    }
    return res
  }
}
