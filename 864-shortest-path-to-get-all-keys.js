/**
 * @param {string[]} grid
 * @return {number}
 */
const shortestPathAllKeys = function(grid) {
  let r = grid.length,
    c = grid[0].length
  let moves = [[-1, 0], [1, 0], [0, 1], [0, -1]]
  let finalState = 0,
    startPoint = null
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      let code = grid[i].charCodeAt(j) - 97
      if (code >= 0 && code <= 5) {
        finalState = finalState | (1 << code)
      } else if (grid[i][j] === '@') {
        startPoint = [i, j]
      }
    }
  }
  let visited = Array(finalState + 1)
    .fill()
    .map(() =>
      Array(r)
        .fill()
        .map(() => Array(c).fill(false))
    )
  let step = 0
  let arr = [[startPoint[0], startPoint[1], 0]]
  while (arr.length > 0) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
      let [x, y, keysState] = arr.shift()
      for (let [dx, dy] of moves) {
        let newx = x + dx,
          newy = y + dy
        if (newx < 0 || newy < 0 || newx >= r || newy >= c) continue
        let curstr = grid[newx][newy]
        if (curstr === '#') continue
        let code = grid[newx].charCodeAt(newy)
        if (visited[keysState][newx][newy]) continue
        visited[keysState][newx][newy] = true
        if (code >= 65 && code <= 72 && ((1 << (code - 65)) & keysState) === 0)
          continue
        let newState = keysState
        if (
          code >= 97 &&
          code <= 102 &&
          ((1 << (code - 97)) & keysState) === 0
        ) {
          newState = newState | (1 << (code - 97))
          if (newState === finalState) return step + 1
        }
        arr.push([newx, newy, newState])
      }
    }
    step++
  }
  return -1
}
