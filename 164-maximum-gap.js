/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumGap = function (nums) {
  if (nums.length < 2) return
  let max = 0
  nums = nums.sort(function (a, b) {
    return a - b
  })
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > max) max = nums[i] - nums[i - 1]
  }
  return max
}
