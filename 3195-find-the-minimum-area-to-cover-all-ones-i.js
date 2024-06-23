/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
  const m = grid.length, n = grid[0].length
  let rmax = -1, rmin = Infinity, cmax = -1, cmin = Infinity
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === 1) {
        rmin = Math.min(rmin, i)
        cmin = Math.min(cmin, j)
        rmax = Math.max(rmax, i)
        cmax = Math.max(cmax, j)
      }
    }
  }
  return (rmax - rmin + 1) * (cmax - cmin + 1)
};
