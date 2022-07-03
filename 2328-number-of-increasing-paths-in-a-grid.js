/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function(grid) {
      let MOD = 1e9 + 7;
      let res = 0;
      let M = grid.length, N = grid[0].length;

  const dp = Array.from({ length: M }, () => Array(N))

      for (let r = 0; r < M; r++) {
        for (let c = 0; c < N; c++) {
          res = (res + dfs(grid, r, c, dp)) % MOD;
        }
      }
      return res; 

    function dfs(grid,  r,  c,  dp) {
      if (dp[r][c] != null) {
        return dp[r][c];
      }
      let MOD = 1e9 + 7;
      let res = 1;
      let M = grid.length, N = grid[0].length;
    
      for (const dir of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
        let nr = r + dir[0], nc = c + dir[1];
        if (nr < 0 || nr >= M || nc < 0 || nc >= N || grid[nr][nc] <= grid[r][c]) {
          continue;
        }
        res = (res + dfs(grid, nr, nc, dp))%MOD;
      }
      dp[r][c] = res;
      return res;
    }
};
