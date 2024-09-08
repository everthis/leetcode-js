/**
 * @param {number[]} start
 * @param {number} d
 * @return {number}
 */
var maxPossibleScore = function (start, d) {
  start.sort((a, b) => a - b)
  let low = 0,
    high = start[start.length - 1] + d - start[0]
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    if (f(start, d, mid)) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return low - 1
}
function f(start, d, mini) {
  let ans = start[0]
  for (let i = 1; i < start.length; i++) {
    let nextMin = ans + mini
    if (nextMin > start[i] + d) {
      return false
    }
    ans = Math.max(start[i], nextMin)
  }
  return true
}
