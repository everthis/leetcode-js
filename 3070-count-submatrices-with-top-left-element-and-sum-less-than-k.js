/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function (grid, k) {
  const n = grid.length
  const m = grid[0].length
  const acc = new Array(m + 1).fill(0)

  let res = 0
  for (let i = 0; i < n; i++) {
    const tmp = new Array(m + 1).fill(0)
    for (let j = 0; j < m; j++) {
      tmp[j + 1] = tmp[j] + grid[i][j]
    }

    for (let j = 0; j < m; j++) {
      acc[j + 1] += tmp[j + 1]
      if (acc[j + 1] <= k) {
        res += 1
      }
    }
  }
  return res
}
