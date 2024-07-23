/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumTotalCost = function(nums) {
  const n = nums.length;
  const dp = Array.from({ length: n + 1 }, () => Array(2).fill(0));
  dp[1][0] = nums[0]
  dp[1][1] = nums[0]
    for (let i = 2; i <= n; i++) {
        const e = nums[i - 1]
        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]) + e
        dp[i][1] = dp[i - 1][0] - e
    }


  return Math.max(dp[n][0], dp[n][1])
};

// another


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTotalCost = function (nums) {
  const n = nums.length
  const cache = new Map()

  return dfs(n - 1)
  function dfs(i) {
    if (cache.has(i)) return cache.get(i)
    if (i === 0) {
      return nums[0]
    } else if (i === 1) {
      return nums[0] + Math.abs(nums[1])
    } else {
      const result = Math.max(
        dfs(i - 1) + nums[i],
        dfs(i - 2) + nums[i - 1] - nums[i],
      )
      cache.set(i, result)
      return result
    }
  }
}
