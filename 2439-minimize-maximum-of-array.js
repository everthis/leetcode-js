/**
 * @param {number[]} nums
 * @return {number}
 */
const minimizeArrayValue = function(nums) {
  const n = nums.length
  let sum = 0, res = 0;
  for (let i = 0; i < n; ++i) {
    sum += nums[i];
    res = Math.max(res, Math.ceil(sum / (i + 1)));
  }
  return res;
};
