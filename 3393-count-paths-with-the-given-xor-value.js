/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
const countPathsWithXorValue = function(grid, k) {
  const m = grid.length, n = grid[0].length
  const mod = 1e9 + 7
  const dp = Array.from({length: m}, () => Array.from({length: n}, () => Array(16).fill(0)))
  dp[0][0][grid[0][0]] = 1

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
        for(let v = 0; v < 16; v++) {
            if(dp[i][j][v] <= 0) continue
            if(i + 1 < m) {
                const e = grid[i + 1][j]
                dp[i + 1][j][v ^ e] = (dp[i + 1][j][v ^ e] + dp[i][j][v]) % mod
            }
            if(j + 1 < n) {
                const e = grid[i][j + 1]
                dp[i][j + 1][v ^ e] = (dp[i][j + 1][v ^ e] + dp[i][j][v]) % mod
            }
        }
    }
  }

  return dp[m - 1][n - 1][k]
};
