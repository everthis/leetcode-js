/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function (nums, k) {
  const n = nums.length
  let res = -Infinity
  const pre_sum = new Array(n + 1).fill(0)

  for (let i = 0; i < n; i++) {
    pre_sum[i + 1] = pre_sum[i] + nums[i]
  }

  const groups = Array.from({ length: k }, (_, i) => [pre_sum[i]])

  for (let i = k; i <= n; i++) {
    const idx = i % k
    groups[idx].push(pre_sum[i])
  }

  for (let i = 0; i < k; i++) {
    const group = groups[i]
    const mx_dp = new Array(group.length + 1).fill(-Infinity)

    for (let j = group.length - 1; j >= 0; j--) {
      mx_dp[j] = Math.max(mx_dp[j + 1], group[j])
    }

    for (let j = 0; j < group.length; j++) {
      res = Math.max(res, mx_dp[j + 1] - group[j])
    }
  }

  return res
}
