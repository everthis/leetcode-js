/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
const jobScheduling = function (startTime, endTime, profit) {
  const items = Array.from({ length: startTime.length }, () => Array(3).fill(0))
  for (let i = 0; i < startTime.length; i++) {
    items[i] = [startTime[i], endTime[i], profit[i]]
  }
  items.sort((a1, a2) => a1[1] - a2[1])
  const dpEndTime = []
  const dpProfit = []
  dpEndTime.push(0)
  dpProfit.push(0)
  for (let item of items) {
    const s = item[0],
      e = item[1],
      p = item[2]
    let prevIdx = binarySearch(dpEndTime, 0, dpEndTime.length - 1, s + 1)
    if (prevIdx < 0) {
      prevIdx = -prevIdx - 1
    }
    prevIdx--
    const currProfit = dpProfit[prevIdx] + p,
      maxProfit = dpProfit[dpProfit.length - 1]
    if (currProfit > maxProfit) {
      dpProfit.push(currProfit)
      dpEndTime.push(e)
    }
  }
  return dpProfit[dpProfit.length - 1]
}

function binarySearch(arr, l, r, x) {
  while (l <= r) {
    const m = l + ((r - l) >> 1)
    if (arr[m] === x) return m
    if (arr[m] < x) l = m + 1
    else r = m - 1
  }
  return -l - 1
}
