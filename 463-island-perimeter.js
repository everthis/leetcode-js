/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function(grid) {
  let len = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) {
        len += cell(grid, r, c);
      }
    }
  }
  return len;
};

function cell(grid, r, c) {
  let len = 0;
  // top
  if (r === 0 || grid[r - 1][c] !== 1) {
    len += 1;
  }
  // left
  if (c === 0 || grid[r][c - 1] !== 1) {
    len += 1;
  }
  // right
  if (grid[r][c + 1] !== 1) {
    len += 1;
  }
  // bottom
  if (grid[r + 1] == null || grid[r + 1][c] !== 1) {
    len += 1;
  }
  return len;
}

console.log(
  islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])
);

// another

/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function(grid) {
  const m = grid.length
  const n = grid[0].length
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  let r = 0
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === 1) r += h(i, j)
    }
  }
  
  return r
  
  function h(i, j) {
    let res = 0
    for(let d of dirs) {
      const nr = i + d[0]
      const nc = j + d[1]
      if(nr < 0 || nc < 0 || nr >= m || nc >= n || grid[nr][nc] === 0) res++
    }
    return res
  }
};
