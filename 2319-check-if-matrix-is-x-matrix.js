/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
  const n = grid.length
  const onDiag = (i, j) => {
    return i === j || j === n - 1 - i
  }
  for(let i = 0; i < n; i++) {
    for(let j = 0;j < n; j++) {
      const valid = onDiag(i, j)
      if(valid) {
        if(grid[i][j] === 0) return false
      }else {
        if(grid[i][j] !== 0) return false
      }
    }
  }
  
  return true
};
