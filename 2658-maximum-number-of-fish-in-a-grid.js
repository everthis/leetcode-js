const deepCopy2DArray = (g) => {
  let d = []
  for (const a of g) d.push([...a])
  return d
}

const dx = [1, -1, 0, 0],
  dy = [0, 0, 1, -1]
const getAllAreasCoordinates = (g) => {
  const forbid = 0,
    floodFillMakeConnected = '*' // forbid is land cell
  let n = g.length,
    m = g[0].length,
    res = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (g[i][j] != forbid) {
        let q = [[i, j]],
          area = []
        while (q.length) {
          let [x, y] = q.shift()
          for (let k = 0; k < 4; k++) {
            let nx = x + dx[k],
              ny = y + dy[k]
            if (
              nx < 0 ||
              nx >= n ||
              ny < 0 ||
              ny >= m ||
              g[nx][ny] == forbid ||
              g[nx][ny] == floodFillMakeConnected
            )
              continue
            g[nx][ny] = floodFillMakeConnected
            area.push([nx, ny])
            q.push([nx, ny])
          }
        }
        if (area.length == 0 && g[i][j] != floodFillMakeConnected)
          area.push([i, j])
        res.push(area)
      }
    }
  }
  return res
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
const findMaxFish = (g) => {
  let areas = getAllAreasCoordinates(deepCopy2DArray(g)),
    res = 0
  for (const area of areas) {
    let sum = 0
    for (const [x, y] of area) sum += g[x][y]
    res = Math.max(res, sum)
  }
  return res
}

