/**
 * @param {number[][]} grid
 * @return {number}
 */
const countCornerRectangles = function (grid) {
  let ans = 0
  for (let i = 0; i < grid.length - 1; i++) {
    for (let j = i + 1; j < grid.length; j++) {
      let counter = 0
      for (let k = 0; k < grid[0].length; k++) {
        if (grid[i][k] === 1 && grid[j][k] === 1) counter++
      }
      if (counter > 0) ans += (counter * (counter - 1)) / 2
    }
  }
  return ans
}
