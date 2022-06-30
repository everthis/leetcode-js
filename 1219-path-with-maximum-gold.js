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
