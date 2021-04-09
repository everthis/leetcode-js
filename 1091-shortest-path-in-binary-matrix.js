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
