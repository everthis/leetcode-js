/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kInversePairs = function(n, k) {
  const mod = 1e9 + 7
  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0))
  for(let i = 0; i <= n; i++) dp[i][0] = 1
  for(let i = 2; i <= n; i++) {
    for(let j = 1; j <= k; j++) {
        if(j >= i) dp[i][j] = (dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - i]) % mod
        else dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % mod

        if(dp[i][j] < 0) dp[i][j] += mod
    }
  }

  return dp[n][k]
};

// another


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
