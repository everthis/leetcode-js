/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minCost = function (nums, k) {
  const n = nums.length,
    max = Math.max(...nums),
    dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  for (let i = 0; i < n; i++) {
    let f = Array(max + 1).fill(0),
      cost = 0
    for (let j = i; j < n; j++) {
      f[nums[j]]++
      if (f[nums[j]] == 2) {
        cost += 2
      } else if (f[nums[j]] > 2) {
        cost++
      }
      dp[j + 1] = Math.min(dp[i] + cost + k, dp[j + 1])
    }
  }
  return dp[n]
}
