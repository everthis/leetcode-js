/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = function(grid) {
  if(grid == null || grid.length === 0 || grid[0][0] === 1) return -1 
  let res = 1
  const n = grid.length
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [-1, -1],
    [-1, 1],
    [1, 1],
    [1, -1],
  ]
  let q = [[0, 0]]
  while(q.length) {
    const tmp = q
    q = []
    for(let [x, y] of tmp) {
      if (x < 0 || x >= n || y < 0 || y >= n || grid[x][y] !== 0) continue
      if(x === n - 1 && y === n - 1) return res
      grid[x][y] = 1
      for(let [dx, dy] of dirs) {    
        q.push([x + dx, y + dy])
      }
    }
    res++
  }
  return -1
};

// another

/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = function(grid) {
  if(grid == null || grid.length === 0 || grid[0][0] === 1) return -1 
  let res = 1
  const n = grid.length
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [-1, -1],
    [-1, 1],
    [1, 1],
    [1, -1],
  ]
  let q = [[0, 0]]
  while(q.length) {
    let ref = q
    q = []
    for(let [x, y] of ref) {
      if(x === n - 1 && y === n - 1) return res
      grid[x][y] = 1
      for(let [dx, dy] of dirs) {
        const nx = x + dx, ny = y + dy
        if(helper(grid, nx, ny)) {
          q.push([nx, ny])
          grid[nx][ny] = 1 // very important
        }
      }
    }
    res++
  }
  return -1
};

function helper(grid, i, j) {
  const n = grid.length
  if(i < 0 || i >= n || j < 0 || j >= n || grid[i][j] !== 0) return false
  return true
}
