/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function(grid) {
    let count = 0
    const p = {s: 2}
    const rows = grid.length
    const cols = grid[0].length
    while(!chk(grid, rows, cols)) {
      loop(grid, rows, cols, p)
      count++
      if(count> rows * cols) return -1
    }
    
    return count
};

function loop(grid, rows, cols, p) {
  let cur = p.s
  let next = cur + 1
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      if(grid[i][j] === cur) rotten(i, j, grid, next)
    }
  }
  p.s += 1
}

function rotten(row, col, grid, p) { 
  if(grid[row] && col > 0 && grid[row][col - 1] === 1) grid[row][col - 1] = p
  if(grid[row] && col < (grid[0] || []).length - 1 && grid[row][col + 1] === 1) grid[row][col + 1] = p
  if(grid[row] && row > 0 && grid[row - 1][col] === 1) grid[row - 1][col] = p
  if(grid[row] && row < grid.length - 1 && grid[row + 1][col] === 1) grid[row + 1][col] = p
}

function chk(grid, rows, cols) {
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      if(grid[i][j] === 1) return false
    }
  }
  return true
}
