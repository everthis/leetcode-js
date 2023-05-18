/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const isPossibleToCutPath = function(grid) {
  const m = grid.length, n = grid[0].length
  const pre = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
  const suf = Array.from({ length: m + 2 }, () => Array(n + 2).fill(0))
  
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if(i === 1 && j === 1) pre[i][j] = 1
      else if(grid[i - 1][j - 1] === 1) {
        pre[i][j] = pre[i - 1][j] + pre[i][j - 1]
      }
    }
  }
  
  for(let i = m; i > 0; i--) {
    for(let j = n; j > 0; j--) {
      if(i === m && j === n) suf[i][j] = 1
      else if(grid[i - 1][j - 1] === 1) {
        suf[i][j] = suf[i + 1][j] + suf[i][j + 1]
      }
    }
  }
  // console.log(pre, suf)
  
  const target = pre[m][n]
  
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if(i === 1 && j === 1) continue
      if(i === m && j === n) continue
      if(pre[i][j] * suf[i][j] === target) {
        return true
      }
    }
  }
  
  return false
};
