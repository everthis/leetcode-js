/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function (grid) {
  const MOD = 1e9 + 7
  let res = 0
  const M = grid.length,
    N = grid[0].length

  const dp = Array.from({ length: M }, () => Array(N))

  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      res = (res + dfs(r, c)) % MOD
    }
  }
  return res

  function dfs(r, c) {
    if (dp[r][c] != null) {
      return dp[r][c]
    }
    let res = 1

    for (const dir of [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ]) {
      const nr = r + dir[0],
        nc = c + dir[1]
      if (
        nr < 0 ||
        nr >= M ||
        nc < 0 ||
        nc >= N ||
        grid[nr][nc] <= grid[r][c]
      ) {
        continue
      }
      res = (res + dfs(nr, nc)) % MOD
    }
    dp[r][c] = res
    return res
  }
}
