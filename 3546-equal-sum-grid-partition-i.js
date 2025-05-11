/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function (grid) {
  const m = grid.length,
    n = grid[0].length
  let totalSum = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      totalSum += grid[i][j]
    }
  }

  if (totalSum % 2 === 1) return false
  const target = totalSum / 2
  let sum = 0
  // row
  for (let i = 0; i < m; i++) {
    let tmp = 0
    for (let j = 0; j < n; j++) {
      tmp += grid[i][j]
    }
    sum += tmp
    if (i !== m - 1 && sum === target) return true
  }

  // col
  sum = 0
  for (let j = 0; j < n; j++) {
    let tmp = 0
    for (let i = 0; i < m; i++) {
      tmp += grid[i][j]
    }
    sum += tmp
    if (j !== n - 1 && target === sum) return true
  }

  return false
}
