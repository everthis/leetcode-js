/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
var minPathCost = function(grid, moveCost) {
  const m = grid.length, n = grid[0].length
  const memo = Array.from({ length: 2 }, () => Array(n))
  for(let i = 0; i < n; i++) {
    memo[0][i] = grid[0][i]
  }
  let cur = 0
  for(let i = 0; i < m - 1; i++) {
    const nxt = cur ^ 1
    for(let t = 0; t < n; t++) {
      memo[nxt][t] = Infinity
    }
    for(let j = 0; j < n; j++) {
      const v = grid[i][j]
      for(let k = 0; k < n; k++) {
        const cost = moveCost[v][k]
        memo[nxt][k] = Math.min(memo[nxt][k], memo[cur][j] + grid[i + 1][k] + cost)
      }
    }
    cur ^= 1
  }
  
  return Math.min(...memo[cur])
};
