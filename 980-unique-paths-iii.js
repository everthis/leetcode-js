/**
 * @param {number[][]} grid
 * @return {number}
 */
const uniquePathsIII = function(grid) {
  const obj = {
    eNum: 1,
    res: 0,
    rows: grid.length,
    dirs: [[-1, 0], [1, 0], [0, -1], [0, 1]],
    sr: 0,
    sc: 0,
    er: 0,
    ec: 0
  }
  if (obj.rows === 0) return 0
  obj.cols = grid[0].length
  for (let i = 0; i < obj.rows; i++) {
    for (let j = 0; j < obj.cols; j++) {
      if (grid[i][j] === 0) obj.eNum++
      else if (grid[i][j] === 1) (obj.sr = i), (obj.sc = j)
      else if (grid[i][j] === 2) (obj.er = i), (obj.ec = j)
    }
  }
  bt(grid, obj.sr, obj.sc, obj)
  return obj.res
}

function bt(grid, x, y, obj) {
  if (x < 0 || x >= obj.rows || y < 0 || y >= obj.cols || grid[x][y] < 0) return
  if (x === obj.er && y === obj.ec) {
    if (obj.eNum === 0) obj.res++
    return
  }
  grid[x][y] = -2
  obj.eNum--
  for (let dir of obj.dirs) {
    bt(grid, x + dir[0], y + dir[1], obj)
  }
  obj.eNum++
  grid[x][y] = 0
}
