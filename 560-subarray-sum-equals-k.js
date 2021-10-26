/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function(nums, k) {
  let totalNum = 0
  const map = new Map()
  let cumulativeSum = 0
  map.set(0, 1)
  for (let i = 0, len = nums.length; i < len; i++) {
    cumulativeSum += nums[i]
    if (map.get(cumulativeSum - k)) {
      totalNum += map.get(cumulativeSum - k)
    }
    if (map.get(cumulativeSum)) {
      map.set(cumulativeSum, map.get(cumulativeSum) + 1)
    } else {
      map.set(cumulativeSum, 1)
    }
  }
  return totalNum
}

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
  const n = nums.length, hash = { 0: 1 }
  let pre = 0
  let res = 0
  for (let i = 0; i < n; i++) {
    const cur = pre + nums[i]
    if (hash[cur - k] != null) res += hash[cur - k]
    hash[cur] = (hash[cur] || 0) + 1
    pre = cur
  }
  return res
}
