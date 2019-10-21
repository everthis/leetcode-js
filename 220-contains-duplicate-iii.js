/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
const containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (k < 1 || t < 0) {
    return false
  }
  const array = new Map()
  const num = 10 ** 10
  for (let i = 0, iL = nums.length; i < iL; ++i) {
    const noNegative = nums[i] + num
    const factor = Math.floor(noNegative / (t + 1))
    if (
      array.has(factor) ||
      (array.has(factor - 1) && noNegative - array.get(factor - 1) <= t) ||
      (array.has(factor + 1) && array.get(factor + 1) - noNegative <= t)
    ) {
      return true
    }
    if (array.size >= k) {
      array.delete(Math.floor((nums[i - k] + num) / (t + 1)))
    }
    array.set(factor, noNegative)
  }
  return false
}

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
const containsNearbyAlmostDuplicate = function(nums, k, t) {
  const map = nums
    .map((val, idx) => ({ val, idx }))
    .sort((a, b) => a.val - b.val)
  let l = 0
  let r = 1
  while (r < map.length) {
    const diff = Math.abs(map[r].val - map[l].val)
    const range = Math.abs(map[r].idx - map[l].idx)
    if (diff <= t && range <= k) return true
    else if (diff > t) l++
    else if (range > k) r++
    if (l === r) r++
  }
  return false
}
