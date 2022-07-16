/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} prices
 * @return {number}
 */
const sellingWood = function(m, n, prices) {
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
  for(const [h, w, p] of prices) {
    dp[h][w] = p
  }

  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      for (let k = 1; k <= i / 2; ++k) {
        dp[i][j] = Math.max(dp[i][j], dp[k][j] + dp[i - k][j]);
      }
      for (let k = 1; k <= j / 2; ++k) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[i][j - k]);
      }
    }
  }
  return dp[m][n];
};

// another

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} prices
 * @return {number}
 */
const sellingWood = function(m, n, prices) {
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
  
  for(const [h, w, p] of prices) dp[h][w] = p
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      for(let k = 1; k <= i / 2; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[k][j] + dp[i - k][j])
      }
      
      for(let k = 1; k <= j / 2; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[i][j - k])
      }
    }
  }
  
  return dp[m][n]
};
