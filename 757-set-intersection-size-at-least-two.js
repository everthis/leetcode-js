/**
 * @param {number[][]} intervals
 * @return {number}
 */
const intersectionSizeTwo = function(intervals) {
  let highest = Number.NEGATIVE_INFINITY;
  let secondHighest = Number.NEGATIVE_INFINITY;
  return intervals
      .sort((a, b) => a[1] - b[1])
      .reduce((sum, interval) => {
      if (interval[0] > secondHighest) {
          secondHighest = interval[1];
          highest = interval[1] - 1;
          return sum + 2;
      }
      else if (interval[0] > highest) {
          highest = secondHighest;
          secondHighest = interval[1];
          return sum + 1;
      }
      return sum;
  }, 0);
};

// another

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

// another

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const intersectionSizeTwo = function (intervals) {
  if (intervals.length === 1) return 2
  intervals.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : b[0] - a[0]))
  let right = intervals[0][1]
  let left = right - 1
  let result = 2
  for (let i = 1, len = intervals.length; i < len; i++) {
    const curr = intervals[i]
    if (curr[0] <= right && curr[0] > left) {
      result++
      left = right
      right = curr[1]
    } else if (curr[0] > right) {
      result += 2
      left = curr[1] - 1
      right = curr[1]
    }
  }

  return result
}

