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

// another

/**
 * @param {number[][]} grid
 * @return {number}
 */
class UnionFind {
  constructor(N) {
    this.id = [];
    for (let i = 0; i < N; i++) {
      this.id[i] = i;
    }
  }

  root(i) {
    while (i != this.id[i]) {
      this.id[i] = this.id[this.id[i]];
      i = this.id[i];
    }
    return i;
  }
  isConnected(p, q) {
    return this.root(p) === this.root(q);
  }
  union(p, q) {
    if (this.isConnected(p, q)) return;
    this.id[this.root(p)] = this.root(q);
  }
}
const swimInWater = grid => {
  const N = grid.length;
  const uf = new UnionFind(N * N);
  let time = 0;
  while (!uf.isConnected(0, N * N - 1)) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (grid[i][j] > time) continue;
        if (i < N - 1 && grid[i + 1][j] <= time)
          uf.union(i * N + j, i * N + j + N);
        if (j < N - 1 && grid[i][j + 1] <= time)
          uf.union(i * N + j, i * N + j + 1);
      }
    }
    time++;
  }
  return time - 1;
};
