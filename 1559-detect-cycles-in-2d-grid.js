/**
 * @param {character[][]} grid
 * @return {boolean}
 */
const containsCycle = function (grid) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  const rows = grid.length
  const cols = (grid[0] || []).length
  const vis = Array.from({ length: rows }, () => Array(cols).fill(false))
  let res = false
  const dfs = (i, j, prevR, prevC, char) => {
    vis[i][j] = true
    for (let d of dirs) {
      const r = i + d[0]
      const c = j + d[1]
      if (r >= 0 && r < rows && c >= 0 && c < cols) {
        if (!(r == prevR && c === prevC)) {
          if (grid[r][c] === char) {
            if (!vis[r][c]) {
              if (dfs(r, c, i, j, char)) return true
            } else {
              if (prevR !== -1 && prevC !== -1) return true
            }
          }
        }
      }
    }
    return false
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!vis[i][j]) {
        res |= dfs(i, j, -1, -1, grid[i][j])
      }
      if (res) return true
    }
  }
  return res
}

// another

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
