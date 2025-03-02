/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} m
 * @return {number}
 */
var maxSum = function (nums, k, m) {
  const n = nums.length

  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i]
  }

  const dp = Array.from({ length: k + 1 }, () =>
    new Array(n + 1).fill(Number.MIN_SAFE_INTEGER / 2),
  )
  for (let i = 0; i <= n; i++) {
    dp[0][i] = 0
  }
  for (let j = 0; j < k; j++) {
    const best = new Array(n + 1).fill(0)
    best[0] = dp[j][0] - prefix[0]
    for (let i = 1; i <= n; i++) {
      best[i] = Math.max(best[i - 1], dp[j][i] - prefix[i])
    }
    for (let i = m; i <= n; i++) {
      const candidate = prefix[i] + best[i - m]
      dp[j + 1][i] = i === m ? candidate : Math.max(dp[j + 1][i - 1], candidate)
    }
  }
  return dp[k][n]
}
