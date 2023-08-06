/**
 * @param {number[]} nums
 * @param {number} m
 * @return {boolean}
 */
const canSplitArray = function(nums, m) {
  const n = nums.length
  if(n <= 2) return true
  for(let i = 1; i < n; i++) {
    if(nums[i] + nums[i - 1] >= m) return true
  }
  return false
};
