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

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function(nums) {
  const len = nums.length
  if (len === 0) return 0
  let up = 1
  let down = 1
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      up = down + 1
    } else if (nums[i] < nums[i - 1]) {
      down = up + 1
    }
  }
  return Math.max(up, down)
}
