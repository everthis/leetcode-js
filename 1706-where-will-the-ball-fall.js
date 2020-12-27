/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findBall = function (grid) {
  const res = new Array(grid[0].length).fill(0)
  for (let i = 0; i < res.length; i++) {
    let start = i
    let state = 1
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][start] === 1) {
        if (start >= grid[0].length - 1 || grid[j][start + 1] === -1) {
          state = -1
          break
        }
        start++
      } else {
        if (start <= 0 || grid[j][start - 1] == 1) {
          state = -1
          break
        }
        start--
      }
    }
    res[i] = state === -1 ? state : start
  }
  return res
}
