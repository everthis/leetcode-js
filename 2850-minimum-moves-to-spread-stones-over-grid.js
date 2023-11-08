/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
  let zeros = []
  let extras = []
  let ans = 0
  for (let r = 0; r < 3; ++r) {
    for (let c = 0; c < 3; ++c) {
      if (grid[r][c] > 1) {
        extras.push([r, c, grid[r][c]])
      } else if (grid[r][c] == 0) {
        zeros.push([r, c])
      }
    }
  }
  function solve(index) {
    if (index >= zeros.length) {
      return 0
    }
    let min = Number.MAX_SAFE_INTEGER
    let [r, c] = zeros[index]
    for (let j = 0; j < extras.length; ++j) {
      if (extras[j][2] > 1) {
        extras[j][2] -= 1
        min = Math.min(
          min,
          Math.abs(extras[j][0] - r) +
            Math.abs(extras[j][1] - c) +
            solve(index + 1),
        )
        extras[j][2] += 1
      }
    }
    return min
  }
  return solve(0)
}
