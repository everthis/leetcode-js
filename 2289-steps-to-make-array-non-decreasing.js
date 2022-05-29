/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function(nums) {
  const n = nums.length
  let res = 0, j = -1;
  const dp = Array(n).fill(0), stack = Array(n).fill(0);
  for (let i = n - 1; i >= 0; --i) {
    while (j >= 0 && nums[i] > nums[stack[j]]) {
      dp[i] = Math.max(++dp[i], dp[stack[j--]])
      res = Math.max(res, dp[i])
    }
    stack[++j] = i
  }
  return res
};
