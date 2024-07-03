/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
  const res = [], n = intervals.length
  let i = 0
  while(i < n && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i])
    i++
  }
  while(i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0])
    newInterval[1] = Math.max(newInterval[1], intervals[i][1])
    i++
  }
  res.push(newInterval)
  while(i < n) {
    res.push(intervals[i])
    i++
  }

  return res
};

// another
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
  let i = 0
  while (i < intervals.length && intervals[i][1] < newInterval[0]) i++
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0])
    newInterval[1] = Math.max(newInterval[1], intervals[i][1])
    intervals.splice(i, 1)
  }
  intervals.splice(i, 0, newInterval)
  return intervals
}
