/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums, k) {
  const freq = new Map()

  for (let i = 0; i <= nums.length - k; i++) {
    const sub = new Set(nums.slice(i, i + k))
    for (const num of sub) {
      freq.set(num, (freq.get(num) || 0) + 1)
    }
  }

  let ans = -1
  for (const [num, count] of freq) {
    if (count === 1) {
      ans = Math.max(ans, num)
    }
  }
  return ans
}
