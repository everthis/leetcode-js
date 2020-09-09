/**
 * @param {number[][]} grid
 * @return {number}
 */
const minDays = function (grid) {
  if (!grid.length || !grid[0].length) return 0
  if (numIslands(grid) != 1) return 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        grid[i][j] = 0
        if (numIslands(grid) != 1) return 1
        grid[i][j] = 1
      }
    }
  }
  return 2
}

function numIslands(grid) {
  let m = Array.from({ length: grid.length }, (v, i) => {
    return [...grid[i]]
  })
  let count = 0
  for (let i = 0; i < m.length; i++)
    for (let j = 0; j < m[0].length; j++) removeIslandAt(i, j, 1)
  return count
  function removeIslandAt(i, j, firstIteration = 0) {
    if (i >= m.length || j >= m[0].length || i < 0 || j < 0 || m[i][j] == 0)
      return
    m[i][j] = 0
    count += firstIteration
    removeIslandAt(i - 1, j)
    removeIslandAt(i + 1, j)
    removeIslandAt(i, j - 1)
    removeIslandAt(i, j + 1)
  }
}
