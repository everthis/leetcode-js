/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getSumAbsoluteDifferences = function(nums) {
  const res = [], n = nums.length
  let sum = 0
  for(let first = nums[0], i = 1; i < n; i++) {
    sum += nums[i] - first
  }
  res[0] = sum
  for(let i = 1; i < n; i++) {
    res[i] = res[i - 1] - (nums[i] - nums[i - 1]) * (n - i - 1) + (nums[i] - nums[i - 1]) * (i - 1)
  }

  return res
};
