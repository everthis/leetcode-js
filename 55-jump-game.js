/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
  let max = 0
  for(let i = 0, len = nums.length; i < len; i++) {
    if(i <= max && nums[i] > 0) {
      max = Math.max(max, i + nums[i])
    }
  }
  return max >= nums.length - 1
};
