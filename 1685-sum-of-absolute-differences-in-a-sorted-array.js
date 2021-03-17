/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getSumAbsoluteDifferences = function(nums) {
  const res = [], n = nums.length
  let first = 0
  for(let i = 1; i < n; i++) {
    first += nums[i] - nums[0]
  }
  res[0] = first
  for(let i = 1; i < n; i++) {
    res[i] = res[i - 1] + (nums[i] - nums[i - 1]) * i - (nums[i] - nums[i - 1]) * (n - i)
  }
  
  return res
};
