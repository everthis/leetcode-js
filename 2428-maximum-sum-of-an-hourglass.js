/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function(grid) {
  let res = 0 
  const m = grid.length, n = grid[0].length
  
  for(let i = 0; i < m - 2; i++) {
    for(let j = 0; j < n - 2; j++) {
      res = Math.max(res, helper(i, j))
    }
  }
  
  return res
  
  function helper(i, j) {
    let sum = 0
    for(let r = i; r < i + 3; r++) {
      for(let c = j; c < j + 3; c++) {
        sum += grid[r][c]
      }
    }
    sum -= grid[i + 1][j]
    sum -= grid[i + 1][j + 2]
    // console.log(sum)
    
    return sum
  }
};
