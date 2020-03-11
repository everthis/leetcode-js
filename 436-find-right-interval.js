/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
const findRightInterval = function(intervals) {
  const len = intervals.length
  if (len === 0) return []
  if (len === 1) return [-1]
  intervals = intervals
    .map((item, idx) => {
      item.idx = idx
      return item
    })
    .sort((a, b) => a.start - b.start)
  const results = []
  for (const item of intervals) {
    results[item.idx] = binarySearch(item, intervals)
  }
  return results
}

function binarySearch(target, intervals) {
  let left = 0
  let right = intervals.length - 1
  let solution = -1
  while (left <= right) {
    const mid = ((left + right) / 2) | 0
    if (target.end > intervals[mid].start) {
      left = mid + 1
    } else {
      solution = intervals[mid].idx
      right = mid - 1
    }
  }
  return solution
}
