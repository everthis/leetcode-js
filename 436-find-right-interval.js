/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
const findRightInterval = function(intervals) {
  const res = []
  const arrary = intervals
    .map((interval, idx) => ({ interval, idx }))
    .sort((obj1, obj2) => obj1.interval[0] - obj2.interval[0])
  for (let interval of intervals) {
    const val = interval[interval.length - 1]
    let left = 0,
      right = intervals.length
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (arrary[mid].interval[0] >= val) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    if (left >= intervals.length) {
      res.push(-1)
    } else {
      res.push(arrary[left].idx)
    }
  }
  return res
}
