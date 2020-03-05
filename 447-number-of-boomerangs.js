/**
 * @param {number[][]} points
 * @return {number}
 */
const numberOfBoomerangs = function(points) {
  const m = new Map()
  const len = points.length
  let res = 0
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
      if(i === j) continue
      const d = dis(points[i], points[j])
      if(!m.has(d)) m.set(d, 0)
      m.set(d, m.get(d) + 1)
    }
    for(let v of m.values()) {
      res += v * (v - 1)
    }
    m.clear()
  }
  return res
};

function dis(a, b) {
  return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2
}
