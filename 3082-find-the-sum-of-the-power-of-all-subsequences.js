/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const sumOfPower = function(nums, k) {
  const n = nums.length, mod = 1e9 + 7;
  const dp = Array(k + 1).fill(0)
  dp[0] = 1;
  for (const a of nums) {
      for (let v = k; v >= 0; v--) {
          dp[v] = (dp[v] * 2 % mod + (v >= a ? dp[v - a] : 0)) % mod
      }
  }
  return dp[k];
};
