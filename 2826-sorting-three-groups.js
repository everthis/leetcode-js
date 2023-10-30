/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumOperations = function(nums) {
  const n = nums.length, { min } = Math
  const dp = Array.from({ length: n + 1 }, () => Array(3 + 1).fill(0))

  for(let i = 1; i <= n; i++) {
    const e = nums[i - 1]
    dp[i][1] = dp[i - 1][1] + (e === 1 ? 0 : 1)
    dp[i][2] = min(dp[i - 1][1], dp[i - 1][2]) + (e === 2 ? 0 : 1)
    dp[i][3] = min(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]) + (e === 3 ? 0 : 1)
  }
  return min(dp[n][1], dp[n][2], dp[n][3])
};
