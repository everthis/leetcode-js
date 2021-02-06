/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSumAfterOperation = function(nums) {
  const n = nums.length
  const dp = Array.from({ length: n }, () => Array(2).fill(0))
  dp[0][0] = nums[0], dp[0][1] = nums[0] * nums[0]
  let res = dp[0][1]
  for(let i = 1; i < n; i++) {
    dp[i][0] = Math.max(nums[i], dp[i - 1][0] + nums[i])
    dp[i][1] = Math.max(nums[i] * nums[i], dp[i - 1][0] + nums[i] * nums[i], dp[i - 1][1] + nums[i])
    res = Math.max(res, dp[i][1])
  }
  return res
};
