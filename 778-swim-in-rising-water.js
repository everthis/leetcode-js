/**
 * @param {number[][]} grid
 * @return {number}
 */
const swimInWater = function(grid) {
  let n = grid.length;
  let low = grid[0][0],
    hi = n * n - 1;
  while (low < hi) {
    let mid = low + Math.floor((hi - low) / 2);
    if (valid(grid, mid)) hi = mid;
    else low = mid + 1;
  }
  return low;
};

function valid(grid, waterHeight) {
  let n = grid.length;
  const visited = Array.from(new Array(n), el => new Array(n).fill(0));
  const dir = [-1, 0, 1, 0, -1];
  return dfs(grid, visited, dir, waterHeight, 0, 0, n);
}
function dfs(grid, visited, dir, waterHeight, row, col, n) {
  visited[row][col] = 1;
  for (let i = 0; i < 4; ++i) {
    let r = row + dir[i],
      c = col + dir[i + 1];
    if (
      r >= 0 &&
      r < n &&
      c >= 0 &&
      c < n &&
      visited[r][c] == 0 &&
      grid[r][c] <= waterHeight
    ) {
      if (r == n - 1 && c == n - 1) return true;
      if (dfs(grid, visited, dir, waterHeight, r, c, n)) return true;
    }
  }
  return false;
}
