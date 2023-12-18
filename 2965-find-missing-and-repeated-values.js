/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
  const hash = {}, res = []
  const m = grid.length, n = grid[0].length
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      const e = grid[i][j]
      if(hash[e] == null) hash[e] = 0
      hash[e]++
      if(hash[e] === 2) res[0] = e
    }
  }
  for(let i = 1; i <= n * n; i++) {
    if(hash[i] == null) res[1] = i
  }
  return res
};
