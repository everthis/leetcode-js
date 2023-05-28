/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
const differenceOfDistinctValues = function (grid) {
  const m = grid.length,
    n = grid[0].length,
    { abs } = Math
  const res = Array.from({ length: m }, () => Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const bottomRight = new Set()
      const topLeft = new Set()
      let x = i + 1
      let y = j + 1
      while (x >= 0 && x < m && y >= 0 && y < n) {
        bottomRight.add(grid[x][y])
        x++
        y++
      }
      x = i - 1
      y = j - 1
      while (x >= 0 && x < m && y >= 0 && y < n) {
        topLeft.add(grid[x][y])
        x--
        y--
      }

      res[i][j] = abs(bottomRight.size - topLeft.size)
    }
  }
  return res
}
