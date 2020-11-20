/**
 * @param {number[][]} points
 * @return {number}
 */
const minAreaRect = function(points) {
  const xmap = {}, ymap = {}
  points.forEach(e => {
    const [x, y] = e
    if(!xmap.hasOwnProperty(x)) xmap[x] = new Set()
    if(!ymap.hasOwnProperty(y)) ymap[y] = new Set()
    xmap[x].add(y)
    ymap[y].add(x)
  })
  let res = Infinity
  for(let i = 0, len = points.length; i < len - 1; i++) {
    const [x, y] = points[i]
    for(let j = i + 1; j < len; j++) {
      const [x1, y1] = points[j]
      if(x === x1 || y === y1) continue
      let area = Infinity
      if(xmap[x].has(y1) && ymap[y].has(x1)) area = Math.abs(x - x1) * Math.abs(y - y1)
      else continue
      res = Math.min(res, area)
    }
  }
  return res === Infinity ? 0 : res
};

// another

/**
 * @param {number[][]} points
 * @return {number}
 */
const minAreaRect = function (points) {
  let ans = Infinity
  const isPoint = {}
  points.forEach(([x, y]) => (isPoint[x * 40000 + y] = true))
  for (let idx1 = 0; idx1 < points.length - 1; idx1++) {
    const [x1, y1] = points[idx1]
    for (let idx2 = idx1 + 1; idx2 < points.length; idx2++) {
      const [x2, y2] = points[idx2]
      const area = Math.abs((x1 - x2) * (y1 - y2))
      if (area === 0 || area >= ans) continue
      if (isPoint[x1 * 40000 + y2] && isPoint[x2 * 40000 + y1]) ans = area
    }
  }
  return ans !== Infinity ? ans : 0
}

