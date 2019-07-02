/**
 * @param {number[][]} intervals
 * @return {number}
 */
const intersectionSizeTwo = function(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);

  let n = intervals.length;
  if (n === 0) return 0;

  let count = 2;
  let last = intervals[0][1];
  let sec_last = intervals[0][1] - 1;

  for (let i = 1; i < n; i++) {
    if (intervals[i][0] <= sec_last) continue;
    else if (intervals[i][0] <= last) {
      sec_last = last;
      last = intervals[i][1];
      count++;
    } else {
      last = intervals[i][1];
      sec_last = intervals[i][1] - 1;
      count += 2;
    }
  }
  return count;
};
