/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperationsToWriteY = function (grid) {
  const mapY = new Map()
  const mapNotY = new Map()
  const n = grid.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let inY = false
      if (i <= n / 2) {
        if (i === j || i + j === n - 1) {
          inY = true
        }
      } else {
        if (j === Math.floor(n / 2)) {
          inY = true
        }
      }

      const item = grid[i][j]
      if (inY) {
        mapY.set(item, (mapY.get(item) || 0) + 1)
      } else {
        mapNotY.set(item, (mapNotY.get(item) || 0) + 1)
      }
    }
  }
  const countY = n + Math.floor(n / 2)
  const countNotY = n * n - countY
  let res = Infinity
  for (let a = 0; a <= 2; a++) {
    for (let b = 0; b <= 2; b++) {
      if (a === b) continue
      const tmp1 = mapY.get(a) || 0
      const tmp2 = mapNotY.get(b) || 0

      const tmp = countY - tmp1 + (countNotY - tmp2)
      res = Math.min(res, tmp)
    }
  }
  return res
}
