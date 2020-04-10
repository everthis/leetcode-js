/**
 * @param {number} N
 * @return {number}
 */
const maxA = function (N) {
  const dp = [...new Array(N + 1)].map((_, i) => i)
  for (let i = 4; i <= N; i++) {
    for (let j = 1; j <= i - 3; j++) {
      dp[i] = Math.max(dp[i], dp[j] * (i - j - 1))
    }
  }
  return dp[N]
}
