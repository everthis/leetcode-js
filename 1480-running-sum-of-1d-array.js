/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
  for(let i = 1, len = nums.length; i < len; i++) {
    nums[i] += nums[i - 1]
  }
  return nums
};
