/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
  let res = 0
  
  const n = grid.length
  for(let i = 0; i <n; i++) {
    for(let j = 0; j < n;j++){
      let tmp = true
      for(let k = 0; k < n; k++) {
        if(grid[i][k] !== grid[k][j]) {
          tmp = false
          break
        }
      }
      if(tmp) res++
    }
  }
  
  return res
};
