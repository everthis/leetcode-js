/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
const nearestValidPoint = function(x, y, points) {
  let idx = -1, dis = Infinity
  const {min, max, abs} = Math
  for(let i = 0; i < points.length; i++) {
    const e = points[i]
    const [tx, ty] = e
    if(tx === x || ty === y) {
      const tmp = abs(tx - x) + abs(ty - y)
      if(tmp < dis) {
        idx = i
        dis = tmp
      }
    }
  }
  
  return idx === -1 ? -1 : idx
};
