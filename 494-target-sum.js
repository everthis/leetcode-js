/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
const findTargetSumWays = function(nums, s) {
  const sum = nums.reduce((p, n) => p + n, 0);
  return sum < s || (s + sum) % 2 > 0 ? 0 : subsetSum(nums, (s + sum) >>> 1);
};

function subsetSum(nums, s) {
  const dp = Array(s + 1).fill(0);
  dp[0] = 1;
  for (let n of nums) {
    for (let i = s; i >= n; i--) dp[i] += dp[i - n];
  }
  return dp[s];
}
