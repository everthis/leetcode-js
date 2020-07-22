/**
 * @param {number[][]} grid
 * @return {number}
 */
const cherryPickup = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const memo = new Array(m)
    .fill(0)
    .map((mat) => new Array(n).fill(0).map((row) => new Array(n).fill(0)))
  return dfs(grid, m, n, 0, 0, n - 1, memo)
}

const dfs = (grid, m, n, r, c1, c2, memo) => {
  if (r === m) return 0
  if (memo[r][c1][c2]) return memo[r][c1][c2]
  let count = 0
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const nc1 = c1 + i
      const nc2 = c2 + j
      if (0 <= nc1 && nc1 < n && 0 <= nc2 && nc2 < n) {
        count = Math.max(count, dfs(grid, m, n, r + 1, nc1, nc2, memo))
      }
    }
  }
  count += c1 === c2 ? grid[r][c1] : grid[r][c1] + grid[r][c2]
  return (memo[r][c1][c2] = memo[r][c2][c1] = count)
}
