/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
const jobScheduling = function (startTime, endTime, profit) {
  const n = startTime.length
  const items = Array.from({ length: startTime.length }, () => Array(3).fill(0))
  for (let i = 0; i < startTime.length; i++) {
    items[i] = [startTime[i], endTime[i], profit[i]]
  }
  items.sort((a1, a2) => a1[1] - a2[1])
  const dpProfit = [0]
  for (let i = 0; i < n; i++) {
    const [s, e, p] = items[i]
    let prevIdx = -1
    for(let j = i - 1; j >= 0; j--) {
      if(items[j][1] <= items[i][0]) {
        prevIdx = j
        break
      }
    }
    const curProfit = (prevIdx === -1 ? 0 : dpProfit[prevIdx]) + p
    dpProfit[i] = Math.max(dpProfit[dpProfit.length - 1], curProfit)
  }
  return dpProfit[dpProfit.length - 1]
}


// another


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
    // find previous endTime index
    const prevIdx = binarySearch(dpEndTime, 0, dpEndTime.length - 1, s)
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
    const mid = l + ((r - l) >> 1)
    if (arr[mid] > x) r = mid - 1
    else {
      if (mid == arr.length - 1 || arr[mid + 1] > x) return mid
      l = mid + 1
    }
  }
  return -1
}
