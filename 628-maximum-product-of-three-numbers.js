/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function (nums) {
  nums.sort((a, b) => a - b)
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  )
}
