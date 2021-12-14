/**
 * @param {number[][]} grid
 * @return {number}
 */
const countPyramids = function(grid) {
  const rev = clone(grid)
  let res = count(grid)
  rev.reverse()
  res += count(rev)
  return res

  function clone(grid) {
    let res = []
    for (const row of grid) {
      res.push(row.slice())
    }
    return res
  }
  function reverse(grid) {
    let l = 0, r = grid.length - 1
    while(l < r) {
      const tmp = grid[l]
      grid[l] = grid[r]
      grid[r] = tmp
      l++
      r--
    }
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
