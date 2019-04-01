/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
    if(m === 0 || n === 0) return 0
    const dp = Array.from({length: m+1}, () => new Array(n+1).fill(1))
    dp[0][1] = dp[1][0] = 1
    for(let i = 1; i <= m; i++) {
      for(let j = 1; j <= n; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
    return dp[m - 1][n - 1]
};
