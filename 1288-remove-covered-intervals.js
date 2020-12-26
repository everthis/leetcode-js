/**
 * @param {number[][]} intervals
 * @return {number}
 */
const removeCoveredIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
  const n = intervals.length
  let res = n, max = intervals[0][1]
  for(let i = 1; i < n; i++) {
    if(intervals[i][1] <= max) res--
    else max = intervals[i][1]
  }
  return res
};
