/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
const numberOfWays = function(n, x) {
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0))
  dp[0][0] = 1
  const mod = 1e9 + 7
  for(let i = 0; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
      dp[i][j] = (dp[i][j] + dp[i][j - 1]) % mod
      const tmp = Math.pow(j, x)
      if(i >= tmp) {
        dp[i][j] = (dp[i][j] + dp[i - tmp][j - 1]) % mod
      }
    }
  }
  
  return dp[n][n]
};
