/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
const hitBricks = function (grid, hits) {
  const n = grid[0].length
  const m = hits.length
  const res = new Array(m).fill(0)
  for (const [r, c] of hits) {
    if (grid[r][c] == 1) grid[r][c] = 0
    else grid[r][c] = -1
  }
  for (let j = 0; j < n; j++) {
    getConnectedCount(grid, 0, j)
  }
  for (let i = m - 1; i >= 0; i--) {
    const [r, c] = hits[i]
    if (grid[r][c] == -1) continue
    grid[r][c] = 1
    if (isConnectedToTop(grid, r, c)) {
      res[i] = getConnectedCount(grid, r, c) - 1
    }
  }
  return res
}
const isConnectedToTop = (grid, i, j) => {
  if (i == 0) return true
  const dircs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  for (const [dx, dy] of dircs) {
    const nx = i + dx
    const ny = j + dy
    if (
      0 <= nx &&
      nx < grid.length &&
      0 <= ny &&
      ny < grid[0].length &&
      grid[nx][ny] == 2
    ) {
      return true
    }
  }
  return false
}

const getConnectedCount = (grid, i, j) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] != 1
  )
    return 0
  let count = 1
  grid[i][j] = 2
  count +=
    getConnectedCount(grid, i + 1, j) +
    getConnectedCount(grid, i - 1, j) +
    getConnectedCount(grid, i, j + 1) +
    getConnectedCount(grid, i, j - 1)
  return count
}
