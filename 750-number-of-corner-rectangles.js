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
      ans += (counter * (counter - 1)) / 2
    }
  }
  return ans
}

// another

// optimized

/**
 * @param {number[][]} grid
 * @return {number}
 */
const countCornerRectangles = function (grid) {
  let ans = 0
  let largeLoopLen, smLoopLen, r
  if(grid.length > grid[0].length) {
    r = false
    largeLoopLen = grid.length
    smLoopLen = grid[0].length
  } else {
    r = true
    largeLoopLen = grid[0].length
    smLoopLen = grid.length
  }
  for (let i = 0; i < smLoopLen - 1; i++) {
    for (let j = i + 1; j < smLoopLen; j++) {
      let counter = 0
      for (let k = 0; k < largeLoopLen; k++) {
        if(r) {
          if (grid[i][k] === 1 && grid[j][k] === 1) counter++
        } else {
          if (grid[k][i] === 1 && grid[k][j] === 1) counter++
        }
        
      }
      ans += (counter * (counter - 1)) / 2
    }
  }
  return ans
}
