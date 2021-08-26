/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
const latestDayToCross = function (row, col, cells) {
  let l = 0,
    n = cells.length,
    r = n
  while (l < r) {
    const mid = ~~((l + r) / 2)
    if (canWalk(mid)) {
      l = mid + 1
    } else {
      r = mid
    }
  }

  return l

  function canWalk(mid) {
    const grid = Array.from({ length: row }, () => Array(col).fill(0))
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]
    for (let i = 0; i <= mid; i++) {
      const [r, c] = cells[i]
      grid[r - 1][c - 1] = 1
    }

    let q = []

    for (let i = 0; i < col; i++) {
      if (grid[0][i] === 0) {
        q.push([0, i])
        grid[0][i] = 1
      }
    }

    while (q.length) {
      const size = q.length,
        tmp = []
      for (let i = 0; i < size; i++) {
        const [r, c] = q[i]
        if (r === row - 1) return true
        for (let [dr, dc] of dirs) {
          const nr = r + dr,
            nc = c + dc
          if (nr < 0 || nr >= row || nc < 0 || nc >= col || grid[nr][nc] === 1)
            continue
          tmp.push([nr, nc])
          grid[nr][nc] = 1
        }
      }
      q = tmp
    }

    return false
  }
}
