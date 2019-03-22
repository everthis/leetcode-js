/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function(nums) {
  if (nums.length < 2) return nums.length
  let prevdiff = nums[1] - nums[0]
  let count = prevdiff !== 0 ? 2 : 1
  for (let i = 2; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1]
    if ((diff > 0 && prevdiff <= 0) || (diff < 0 && prevdiff >= 0)) {
      count++
      prevdiff = diff
    }
  }
  return count
}
