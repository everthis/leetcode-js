/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function (grid) {
  let r = grid.length
  let c = grid[0].length
  let prex = new Array(r + 1).fill(0).map(() => new Array(c + 1).fill(0))
  let prey = new Array(r + 1).fill(0).map(() => new Array(c + 1).fill(0))

  for (let i = 1; i <= r; i++) {
    for (let j = 1; j <= c; j++) {
      prex[i][j] =
        prex[i - 1][j] +
        prex[i][j - 1] -
        prex[i - 1][j - 1] +
        (grid[i - 1][j - 1] === 'X' ? 1 : 0)
      prey[i][j] =
        prey[i - 1][j] +
        prey[i][j - 1] -
        prey[i - 1][j - 1] +
        (grid[i - 1][j - 1] === 'Y' ? 1 : 0)
    }
  }

  let res = 0
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      let cx = prex[i + 1][j + 1] - prex[0][j + 1] - prex[i + 1][0] + prex[0][0]
      let cy = prey[i + 1][j + 1] - prey[0][j + 1] - prey[i + 1][0] + prey[0][0]
      if (cx === cy && cx > 0) {
        res++
      }
    }
  }
  return res
}
