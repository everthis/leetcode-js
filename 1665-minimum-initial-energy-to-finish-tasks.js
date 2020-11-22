/**
 * @param {number[][]} tasks
 * @return {number}
 */
const minimumEffort = function (tasks) {
  tasks.sort((a, b) => a[1] - a[0] > b[1] - b[0] ? 1 : -1)
  let res = 0
  for(let e of tasks) {
    res = Math.max(res + e[0], e[1])
  }
  return res
}

// another

/**
 * @param {number[][]} tasks
 * @return {number}
 */
const minimumEffort = function (a) {
  let low = 0,
    high = 1e9
  for (let x of a) low = Math.max(low, x[1])
  a.sort((lhs, rhs) => (lhs[1] - lhs[0] > rhs[1] - rhs[0] ? -1 : 1))
  let n = a.length
  while (low != high) {
    let mid = low + ((high - low) >> 1)
    let found = false
    let rem = mid
    for (let i = 0; i < n; ++i) {
      if (rem < a[i][1]) {
        found = true
        break
      }
      rem -= a[i][0]
    }
    if (found) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return high
}
