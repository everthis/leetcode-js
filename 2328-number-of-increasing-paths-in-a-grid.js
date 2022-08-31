/**
 * @param {number[][]} grid
 * @return {number}
 */
const countPaths = function (grid) {
  const mod = 1e9 + 7
  const m = grid.length, n = grid[0].length
  let res = 0
  const dirs = [[1,0], [-1,0], [0, 1], [0, -1]]
  const memo = Array.from({ length: m }, () => Array(n).fill(0))
  for(let i = 0; i <m ; i++) {
    for(let j = 0; j < n; j++) {
      res = (res + dfs(i, j)) % mod
    }
  } 
  return res
  
  function dfs(i, j) {
    let res = 1
    if(memo[i][j] !== 0) return memo[i][j]
    for(const [dx, dy] of dirs) {
      const nx = i + dx, ny = j + dy
      if(nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] > grid[i][j]) {
        res = (res + dfs(nx, ny)) % mod
      }
    }
    
    memo[i][j] = res
    
    return res
  }
}

// another

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
