/**
 * @param {character[][]} grid
 * @return {boolean}
 */
const containsCycle = function (grid) {
  const wholePath = (r, c, letter, component, last = [-1, -1]) => {
    const dirs = [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ]
    const tmp = grid[r][c]
    grid[r][c] = component
    const nextSteps = dirs
      .map((x) => [x[0] + r, x[1] + c])
      .filter(
        (x) =>
          x[0] >= 0 && x[0] < grid.length && x[1] >= 0 && x[1] < grid[0].length
      )
    for (let step of nextSteps) {
      if (step[0] === last[0] && last[1] === step[1]) {
        continue
      }
      if (grid[step[0]][step[1]] === component) {
        return true
      }
      if (grid[step[0]][step[1]] === letter) {
        let outcome = wholePath(step[0], step[1], letter, component, [r, c])
        if (outcome) {
          return true
        }
      }
    }
    return false
  }

  let component = 1
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const letter = grid[r][c]
      if (typeof letter === 'string') {
        grid[r][c] = component
        const outcome = wholePath(r, c, letter, component)
        if (outcome) {
          return true
        }
        component++
      }
    }
  }
  return false
}
