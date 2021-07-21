/**
 * @param {number[][]} grid
 * @return {number}
 */
const surfaceArea = function(grid) {
  if(grid == null || grid.length === 0) return 0
  const m = grid.length, n = grid[0].length
  let res = 0, adj = 0
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      const h = grid[i][j]
      if(h) res += h * 4 + 2
      if(j > 0) {
        if(grid[i][j - 1]) adj += Math.min(h, grid[i][j - 1])
      }
      if(i > 0) {
        if(grid[i - 1][j]) adj += Math.min(h, grid[i - 1][j])
      }
      // console.log(adj)
    }
  }
  
  return res - adj * 2
};

// 2 * 4 + 2
// 6 + 10 + 14 + 18 - (1 + 2 + 3 + 1) * 2
