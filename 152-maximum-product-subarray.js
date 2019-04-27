/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
  if(nums.length == 1)return nums[0];
  let dpMax = nums[0];
  let dpMin = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let k = dpMax*nums[i];
    let m = dpMin*nums[i];
    dpMax = Math.max(nums[i], Math.max(k, m));
    dpMin = Math.min(nums[i], Math.min(k, m));
    max = Math.max(dpMax, max);
  }
  return max;
};
