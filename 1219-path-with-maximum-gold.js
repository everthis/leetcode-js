/**
 * @param {number[][]} grid
 * @return {number}
 */
const getMaximumGold = function(grid) {
  const m = grid.length, n = grid[0].length
  const arr = []
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]]
  const visited = new Set()
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] !== 0) arr.push([i, j])
    }
  }
  let res = 0
  
  for(const [i, j] of arr) {
    visited.clear()
    visited.add(`${i},${j}`)
    dfs(i, j, grid[i][j])
  }
  
  return res
  
  function dfs(i, j, cur) {

    res = Math.max(res, cur)
    for(const [dx, dy] of dirs) {
      const nx = i + dx
      const ny = j + dy
      const key = `${nx},${ny}`
      if(nx >= 0 && nx < m && ny >= 0 && ny < n && !visited.has(key) && grid[nx][ny] !== 0) {
        visited.add(key)
        dfs(nx, ny, cur + grid[nx][ny])
        visited.delete(key)
      }
    }
  }
  
};

// another

/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let max = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] != 0) {
        const sum = backtrack(grid, i, j, m, n)
        max = Math.max(sum, max)
      }
    }
  }

  return max
}

function backtrack(grid, row, col, m, n) {
  if (outOfBound(row, col, m, n) || grid[row][col] === 0) return 0

  let sum = grid[row][col]
  grid[row][col] = 0 // mark as being visited already

  const top = backtrack(grid, row - 1, col, m, n)
  const right = backtrack(grid, row, col + 1, m, n)
  const bot = backtrack(grid, row + 1, col, m, n)
  const left = backtrack(grid, row, col - 1, m, n)

  grid[row][col] = sum // backtrack to the original form

  return sum + Math.max(top, right, bot, left)
}

function outOfBound(row, col, m, n) {
  return row < 0 || col < 0 || row >= m || col >= n
}
