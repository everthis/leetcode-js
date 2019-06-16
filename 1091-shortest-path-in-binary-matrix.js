/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = function(grid) {
  let N = grid.length,
    qu = [[0, 0]],
    path = 1
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1]
  ]
  while (qu.length !== 0) {
    let cop = qu
    qu = []
    for (let [r, c] of cop) {
      if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) continue
      if (grid[r][c] === 1) continue
      grid[r][c] = 1
      if (r === N - 1 && c === N - 1) return path
      for (let dir of dirs) {
        qu.push([r + dir[0], c + dir[1]])
      }
    }
    path++
  }
  return -1
}
