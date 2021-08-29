/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = function(nums, k) {
  nums.sort((a, b) => a - b)
  let res = Infinity
  for(let i = 0, n = nums.length; i < n - k + 1; i++) {
    res = Math.min(res, nums[i + k - 1] - nums[i])
  }
  
  return res
  
};
