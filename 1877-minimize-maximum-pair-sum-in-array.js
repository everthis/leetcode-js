/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
  nums.sort((a, b) => a - b)
  let res = 0
  for(let i = 0, limit = nums.length / 2; i < limit; i++) {
    res = Math.max(res, nums[i] + nums[nums.length - 1 - i])
  }
  
  return res
};
