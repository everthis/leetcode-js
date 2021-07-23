/**
 * @param {number[]} nums
 * @return {number}
 */
const largestPerimeter = function(nums) {
  nums.sort((a, b) => a - b)
  for(let i = nums.length - 1; i > 1; i--) {
    if(nums[i] < nums[i - 1] + nums[i - 2]) return nums[i - 2] + nums[i - 1] + nums[i]
  }
  return 0
};
