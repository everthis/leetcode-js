/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function(nums) {
  const res = []
  for(let i = 0, n = nums.length; i < n; i++) {
    res[i] = nums[nums[i]]
  }
  return res
};
