/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minArraySum = function(nums, k) {
  if (k === 1) return 0
  const n = nums.length
  const total = nums.reduce((acc, num) => acc + num, 0)
  const bestSoFar = new Array(k).fill(-1e20)
  bestSoFar[0] = 0
  let prefixAcc = 0
  const dp = new Array(n).fill(0)

  for (let i = 0; i < nums.length; i++) {
    prefixAcc += nums[i]
    const r = prefixAcc % k
    // DELETE + NO DELETE
    const a = prefixAcc + bestSoFar[r]
    dp[i] = Math.max(dp[i - 1] || 0, a)

    const b = dp[i] - prefixAcc
    if (b > bestSoFar[r]) {
      bestSoFar[r] = b
    }
  }
  return total - dp[dp.length - 1] < 1e19
    ? total - dp[dp.length - 1]
    : prefixAcc
};
