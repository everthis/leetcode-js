/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumLength = function (nums, k) {
  const n = nums.length
  const res = Array(k + 1).fill(0)
  const dp = Array.from({ length: k + 1 }, () => new Map())
  for (const a of nums) {
    for (let i = k; i >= 0; i--) {
      const v = dp[i].get(a) || 0
      dp[i].set(a, Math.max(v + 1, i > 0 ? res[i - 1] + 1 : 0))
      res[i] = Math.max(res[i], dp[i].get(a))
    }
  }

  return res[k]
}
