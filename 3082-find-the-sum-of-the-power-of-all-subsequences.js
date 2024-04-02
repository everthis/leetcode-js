/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const sumOfPower = function(nums, k) {
  const n = nums.length, mod = 1e9 + 7;
  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0))
  dp[0][0] = 1
  let res = 0, pow = 1
  for(const e of nums) {
    for(let j = k; j >= e; j--) {
      for(let i = n; i > 0; i--) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - e]) % mod  
      }
    }
  }
  for(let i = n; i > 0; i--) {
    res = (res + (dp[i][k] * pow) % mod) % mod
    pow *= 2
  }
  
  return res
};

// another

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
