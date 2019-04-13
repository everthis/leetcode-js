/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kInversePairs = function(n, k) {
  const dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(0))
  for (let i = 1; i < n + 1; i++) {
    dp[i][0] = 1
  }
  const MOD = 1e9 + 7
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < k + 1; j++) {
      let val = (dp[i - 1][j] - (j >= i ? dp[i - 1][j - i] : 0) + MOD) % MOD
      dp[i][j] = (dp[i][j - 1] + val) % MOD
    }
  }
  return (dp[n][k] - (dp[n][k - 1] || 0) + MOD) % MOD
}
