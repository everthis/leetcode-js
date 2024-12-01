/**
 * @param {number[]} nums
 * @return {number}
 */
var getLargestOutlier = function (nums) {
  let totalSum = 0
  for (let num of nums) {
    totalSum += num
  }

  const freqMap = new Map()
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1)
  }
  let res = Number.MIN_SAFE_INTEGER

  for (let sumElement of nums) {
    let potentialOutlier = totalSum - 2 * sumElement

    if (freqMap.has(potentialOutlier)) {
      if (potentialOutlier === sumElement && freqMap.get(sumElement) < 2) {
        continue
      }
      res = Math.max(res, potentialOutlier)
    }
  }
  return res
}
