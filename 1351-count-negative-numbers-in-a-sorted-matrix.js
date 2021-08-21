/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function(grid) {
  const m = grid.length, n = grid[0].length
  let res = 0, r = m - 1, c = 0
  while(r >= 0 && c < n) {
    if(grid[r][c] < 0) {
      res += n - c
      r--
    } else c++
  }

  return res
};
