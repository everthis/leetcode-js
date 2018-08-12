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
