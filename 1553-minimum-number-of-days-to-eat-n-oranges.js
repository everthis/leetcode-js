/**
 * @param {number} n
 * @return {number}
 */
const minDays = function (n, dp = {}) {
  if (n <= 1) return n
  if (dp[n] == null)
    dp[n] =
      1 +
      Math.min(
        (n % 2) + minDays((n / 2) >> 0, dp),
        (n % 3) + minDays((n / 3) >> 0, dp)
      )
  return dp[n]
}
