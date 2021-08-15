/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
const latestDayToCross = function (row, col, cells) {
  const d = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ]

  let a = Array.from({ length: row }, () => Array(col).fill(0))
  let visited = Array.from({ length: row }, () => Array(col).fill(false))

  for (let i = 0; i < cells.length; i++) {
    a[cells[i][0] - 1][cells[i][1] - 1] = i
  }

  let l = 0
  let r = row * col
  while (l + 1 < r) {
    let w = ~~((l + r) / 2)
    if (canCross(w)) {
      l = w
    } else {
      r = w
    }
  }

  return l

  function canReachBottom(i, j, day) {
    if (i == row - 1) {
      return true
    }
    visited[i][j] = true

    for (let diff of d) {
      let newI = i + diff[0]
      let newJ = j + diff[1]

      if (newI < 0 || newI >= row || newJ < 0 || newJ >= col) {
        continue
      }

      if (visited[newI][newJ] || a[newI][newJ] < day) {
        continue
      }

      if (canReachBottom(newI, newJ, day)) {
        return true
      }
    }

    return false
  }

  function canCross(day) {
    for (let layer of visited) {
      layer.forEach((e, idx) => (layer[idx] = false))
    }

    for (let j = 0; j < col; j++) {
      if (a[0][j] >= day && canReachBottom(0, j, day)) {
        return true
      }
    }

    return false
  }
}


