/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
  let i = 0
  while (i < intervals.length && intervals[i][1] < newInterval[0]) i++
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval = [
      Math.min(intervals[i][0], newInterval[0]),
      Math.max(intervals[i][1], newInterval[1])
    ]
    intervals.splice(i, 1)
  }
  intervals.splice(i, 0, newInterval)
  return intervals
}
