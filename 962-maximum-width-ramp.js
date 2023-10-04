/**
 * @param {number[]} nums
 * @return {number}
 */
const maxWidthRamp = function(nums) {
  const s = [];
  let res = 0, n = nums.length;
  for (let i = 0; i < n; ++i) {
    if (s.length === 0 || nums[s.at(-1)] > nums[i]) s.push(i);      
  }

  for (let i = n - 1; i > res; --i) {
    while (s.length && nums[s.at(-1)] <= nums[i])  res = Math.max(res, i - s.pop());      
  }

  return res;
};
