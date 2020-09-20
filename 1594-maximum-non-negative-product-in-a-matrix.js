/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxProductPath = function (grid) {
  const m = grid.length,
    n = grid[0].length,
    MOD = 1e9 + 7;
  const mx = Array.from({ length: m }, () => Array(n).fill(0));
  const mn = Array.from({ length: m }, () => Array(n).fill(0));
  mx[0][0] = mn[0][0] = grid[0][0];

  // initialize the top and left sides
  for (let i = 1; i < m; i++) {
    mn[i][0] = mx[i][0] = mx[i - 1][0] * grid[i][0];
  }
  for (let j = 1; j < n; j++) {
    mn[0][j] = mx[0][j] = mx[0][j - 1] * grid[0][j];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (grid[i][j] < 0) {
        // smallest negative * negative number = largest
        mx[i][j] = Math.min(mn[i - 1][j], mn[i][j - 1]) * grid[i][j];
        mn[i][j] = Math.max(mx[i - 1][j], mx[i][j - 1]) * grid[i][j];
      } else {
        // largest product * positive number = largest
        mx[i][j] = Math.max(mx[i - 1][j], mx[i][j - 1]) * grid[i][j];
        mn[i][j] = Math.min(mn[i - 1][j], mn[i][j - 1]) * grid[i][j];
      }
    }
  }

  let ans = mx[m - 1][n - 1] % MOD;
  return ans < 0 ? -1 : ans;
};
