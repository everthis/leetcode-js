/**
 * @param {number[]} points
 * @param {number} m
 * @return {number}
 */
var maxScore = function (points, m) {
  const n = points.length
  if (m < n) return 0

  const can = (val) => {
    let total = 0,
      transfer = 0,
      skipAdd = 0
    for (let i = 0; i < n && total <= m; i++) {
      const point = points[i]
      const necessary = Math.floor((val + point - 1) / point)
      if (transfer >= necessary) {
        transfer = 0
        skipAdd++
      } else {
        const p = transfer * point
        const ops = Math.floor((val - p + point - 1) / point)
        total += 2 * ops - 1
        total += skipAdd

        transfer = Math.max(ops - 1, 0)
        skipAdd = 0
      }
    }
    return total <= m
  }

  let l = 1n,
    r = 10n ** 15n,
    res = 0n
  while (l <= r) {
    const mid = l + (r - l) / 2n
    if (can(Number(mid))) {
      res = mid
      l = mid + 1n
    } else {
      r = mid - 1n
    }
  }
  return Number(res)
}
