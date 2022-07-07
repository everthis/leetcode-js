/**
 * @param {number[]} nums
 * @return {number}
 */
 const minDifference = function(nums) {
  let res = Infinity
  const n = nums.length
  if(n < 5) return 0
  nums.sort((a, b) => a - b)
  for(let i = 0; i < 4; i++) {
    res = Math.min(res, nums[n - 4 + i] - nums[i])
  }

  return res
};
