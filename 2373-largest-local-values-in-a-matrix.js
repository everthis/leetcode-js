/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
  const n = grid.length
  const res = Array.from({ length: n - 2 }, () => Array(n - 2).fill(0))
  
  for(let i = 0; i < n - 2; i++) {
    for(let j = 0; j < n - 2; j++) {
      res[i][j] = helper(i, j)
    }
  }
  
  return res
  
  function helper(i, j) {
    let res = 0
    for(let ii = i; ii < 3 + i; ii++) {
      for(let jj = j; jj < 3 + j; jj++) {
        if(grid[ii][jj] > res) {
          res = grid[ii][jj]
        }
      }
    }
      
    return res
  }
};
