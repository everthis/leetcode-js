/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  for(let i = n - 1; i > 0; i--) {
    const cur = nums[i]
    if(nums.indexOf(-cur) !== -1) return cur
  }
  return -1
};
