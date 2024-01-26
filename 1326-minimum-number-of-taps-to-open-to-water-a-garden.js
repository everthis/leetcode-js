/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
const minTaps = function(n, ranges) {
  const len = ranges.length, {min, max} = Math
  const arr = []
  for(let i = 0; i < len; i++) {
    arr.push([max(0, i - ranges[i]), i + ranges[i]])
  }
  // arr.sort((a, b) => a[1] === b[1] ? a[0] - b[0]: a[1] - b[1])
  arr.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
  let res = 0, end = 0, nextEnd = 0, idx = 0
  while(idx < len) {
    nextEnd = end
    while(idx < len && arr[idx][0] <= end) {
      nextEnd = max(nextEnd, arr[idx][1])
      idx++
    }
    res++
    if(nextEnd >= n) return res
    else if(nextEnd === end) return -1
    end = nextEnd
  }


  return -1
};

// another

/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
const minTaps = function (n, ranges) {
  const starts = new Array(n + 1).fill(0)
  for (let i = 0; i <= n; i++) {
    const start = Math.max(0, i - ranges[i])
    starts[start] = Math.max(starts[start], i + ranges[i])
  }
  let count = 0
  let max = 0
  let i = 0
  while (max < n) {
    const end = max
    for (let j = i; j <= end; j++) {
      max = Math.max(max, starts[j])
    }
    if (i === max) return -1
    i = end
    count++
  }
  return count
}

// another

/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
const minTaps = function (n, ranges) {
  const dp = new Array(n + 1).fill(n + 2)
  dp[0] = 0
  for (let i = 0; i <= n; ++i)
    for (let j = Math.max(i - ranges[i] + 1, 0); j <= Math.min(i + ranges[i], n); ++j)
      dp[j] = Math.min(dp[j], dp[Math.max(0, i - ranges[i])] + 1)
  return dp[n] < n + 2 ? dp[n] : -1
}
