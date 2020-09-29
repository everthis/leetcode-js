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

// another

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
  let max = 0
  const n = nums.length
  for(let i = 0; i < n; i++) {
    if(max < i) return false
    max = Math.max(max, i + nums[i])
    if(max >= n - 1) return true
  }
  return max >= n - 1
};
