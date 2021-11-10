/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = function(grid, k) {
  for(let i = 0; i < k; i++) once(grid)
  return grid
};

function once(grid) {
  const m = grid.length, n = grid[0].length
  let last = grid[m - 1][n - 1]
  for(let i = 0; i < m; i++) {
    let pre = grid[i][0]
    for(let j = 1; j < n; j++) {
      let cur = grid[i][j]
      grid[i][j] = pre
      pre = cur
    }
    grid[i][0] = last
    last = pre
  }
}
