/**
 * @param {number[][]} grid
 * @return {number}
 */
 const countPyramids = function(grid) {
  const rev = clone(grid).reverse()
  let res = count(grid)
  res += count(rev)
  return res

  function clone(grid) {
    return grid.map(e => e.slice())
  }

  function count(grid) {
    const m = grid.length, n = grid[0].length
    let res = 0
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n - 1; j++) {
        if (grid[i][j] && grid[i - 1][j]) {
          grid[i][j] = Math.min(
            grid[i - 1][j - 1],
            grid[i - 1][j + 1]
          ) + 1
          res += grid[i][j] - 1
        }
      }
    }
    return res
  }
};
