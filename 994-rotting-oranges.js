/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function(grid) {
  const m = grid.length, n = grid[0].length
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  const visited = new Set()
  let q = []
  let num = 0
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === 2) q.push([i, j]), visited.add(`${i},${j}`)
      if(grid[i][j] !== 0) num++
    }
  }
  let res = 0
  while(q.length) {
    const size = q.length
    const tmp = []
    for(let i = 0; i < size; i++) {
      const [x, y] = q[i]
      for(let [dx, dy] of dirs) {
        const nx = x + dx, ny = y + dy
        if(nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1 && !visited.has(`${nx},${ny}`)) {
          tmp.push([nx, ny])
          visited.add(`${nx},${ny}`)
        }
      }
    }
    q = tmp
    if(q.length) res++
  }
  return visited.size === num ? res : -1
};

// another


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
