/**
 * @param {number[][]} grid
 * @return {number}
 */
const minimumOperations = function(grid) {
  const m = grid.length, n = grid[0].length
  const dp = Array.from({ length: n }, () => Array(10).fill(Infinity))
  for(let i = 0; i < n; i++) {
    for(let v = 0; v < 10; v++) {
      let cost = 0
      
      for(let j = 0; j < m; j++) {
        if(grid[j][i] !== v) cost++
      }
      
      if(i == 0) dp[i][v] = cost
      else {
        for(let p = 0; p < 10; p++) {
          if(p === v) continue
          dp[i][v] = Math.min(dp[i][v], dp[i - 1][p] + cost)
        }
      }
    }
  }
  
  let res = Infinity
  
  for(let v = 0; v < 10; v++) {
    res = Math.min(res, dp[n - 1][v])
  }
  
  return res
};
