/*
 * @lc app=leetcode id=1955 lang=javascript
 *
 * [1955] Count Number of Special Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const countSpecialSubsequences = function (nums) {
  const dp = Array(3).fill(0),
    mod = 10 ** 9 + 7
  for (let e of nums) {
    dp[e] = (((dp[e] + dp[e]) % mod) + (e > 0 ? dp[e - 1] : 1)) % mod
  }
  return dp[2]
}

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const countSpecialSubsequences = function(nums) {
  const mod = 10 ** 9 + 7
  const dp = Array.from({length: 10 **5 + 1}, () => Array(4).fill(-1))
  let n = nums.length, a = nums
  return f(0, 0)
  function f(index, firstMandatory) {
      if (index == n && firstMandatory == 3) {
          return 1;
      }
      if (index == n) {
          return 0;
      }
      if (dp[index][firstMandatory] >= 0) {
          return dp[index][firstMandatory];
      }
      let result = 0;
      if (a[index] == firstMandatory) {
          result = (result +
                  f(index + 1, firstMandatory) +
                  f(index + 1, firstMandatory + 1)
          ) % mod;
      }
      result = (result + f(index + 1, firstMandatory)) % mod;

      return dp[index][firstMandatory] = result;
  }
};





