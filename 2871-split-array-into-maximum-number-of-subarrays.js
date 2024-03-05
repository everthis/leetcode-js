/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarrays = function(nums) {
  let n = nums.length;
  let s = nums[0];
  for (let i = 1; i < n; i++) s &= nums[i];
  if (s > 0) return 1;
  
  let res = 0;
  let l = 0;
  let cs = nums[l];
  for (let r = 0; r < n; r++) {
    cs &= nums[r];
    if (cs == 0) {
      res++;
      l = r + 1;
      cs = nums[l];
    }
  }

  return res;  
};
