/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 */
var minNumberOfSeconds = function (mountainHeight, workerTimes) {
  let low = 0,
    high = 1e18
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2)
    let totalHeightReduced = 0
    for (let workerTime of workerTimes) {
      totalHeightReduced += f(mid, workerTime)
      if (totalHeightReduced >= mountainHeight) break
    }
    if (totalHeightReduced >= mountainHeight) high = mid
    else low = mid + 1
  }
  return low
}
function f(T, workerTime) {
  let low = 0,
    high = 1e6
  while (low < high) {
    let mid = low + Math.floor((high - low + 1) / 2)
    let timeRequired = (workerTime * mid * (mid + 1)) / 2
    if (timeRequired <= T) low = mid
    else high = mid - 1
  }
  return low
}
