/**
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = function(grid) {
  let xy = 0, xz = 0, yz = 0
  const m = grid.length, n = grid[0].length
  for (let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j]) xy++
    }
  }
  
  for (let i = 0; i < m; i++) {
    let tmp = 0
    for(let j = 0; j < n; j++) {
      tmp = Math.max(tmp, grid[i][j])
    }
    xz += tmp
  }
  for (let j = 0; j < n; j++) {
    let tmp = 0
    for(let i = 0; i < m; i++) {
      tmp = Math.max(tmp, grid[i][j])  
    }
    yz += tmp
  }
  
  return xy + yz + xz
};
