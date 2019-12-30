/**
 * @param {number[][]} intervals
 * @param {number[]} toBeRemoved
 * @return {number[][]}
 */
const removeInterval = function(intervals, toBeRemoved) {
  const n = intervals.length
  if (n < 1) return []
  const res = []
  const [x, y] = toBeRemoved
  for (const [a, b] of intervals) {
    const lo = Math.max(a, x)
    const hi = Math.min(b, y)
    if (lo < hi) {
      if (a < lo) {
        res.push([a, lo])
      }
      if (hi < b) {
        res.push([hi, b])
      }
    } else {
      res.push([a, b])
    }
  }
  return res
}
