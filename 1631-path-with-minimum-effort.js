/**
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath = function (heights) {
  const d = [0, 1, 0, -1, 0]
  let lo = 0,
    hi = 10 ** 6 + 1
  while (lo < hi) {
    let effort = lo + ((hi - lo) >> 1)
    if (isPath(heights, effort)) {
      hi = effort
    } else {
      lo = effort + 1
    }
  }
  return lo
  function isPath(h, effort) {
    const m = h.length,
      n = h[0].length
    const q = []
    q.push([0, 0])
    const seen = new Set()
    seen.add(0)
    while (q.length) {
      const cur = q.shift()
      const x = cur[0],
        y = cur[1]
      if (x === m - 1 && y === n - 1) {
        return true
      }
      for (let k = 0; k < 4; k++) {
        const r = x + d[k],
          c = y + d[k + 1]
        if(seen.has(r * n + c)) continue
        if (
          0 <= r &&
          r < m &&
          0 <= c &&
          c < n &&
          effort >= Math.abs(h[r][c] - h[x][y])
        ) {
          seen.add(r * n + c)
          q.push([r, c])
        }
      }
    }
    return false
  }
}
