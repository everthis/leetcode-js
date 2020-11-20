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
