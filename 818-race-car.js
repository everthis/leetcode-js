/**
 * @param {number} target
 * @return {number}
 */
const racecar = function (target) {
  const dp = new Array(target + 1).fill(0)
  for (let i = 1; i <= target; i++) {
    dp[i] = Number.MAX_VALUE
    let m = 1,
      j = 1
    for (; j < i; j = (1 << ++m) - 1) {
      for (let q = 0, p = 0; p < j; p = (1 << ++q) - 1) {
        dp[i] = Math.min(dp[i], m + 1 + q + 1 + dp[i - (j - p)])
      }
    }
    dp[i] = Math.min(dp[i], m + (i == j ? 0 : 1 + dp[j - i]))
  }
  return dp[target]
}
