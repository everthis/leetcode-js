/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function(nums) {
  if (nums.length == 1) {
    return 1;
  }
  let ans = 0,
    anchor = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      anchor = i;
    }
    ans = Math.max(ans, i - anchor + 1);
  }
  return ans;
};
