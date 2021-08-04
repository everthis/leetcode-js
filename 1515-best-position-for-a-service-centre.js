/**
 * @param {number[][]} positions
 * @return {number}
 */
const getMinDistSum = function(positions) {
  const n = positions.length
  let x = positions.reduce((ac, e) => ac + e[0], 0) / n
  let y = positions.reduce((ac, e) => ac + e[1], 0) / n
  
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
  let res = fn(x, y, positions)
  let chg = 100
  while(chg > 1e-6) {
    let zoom = true
    for(let [dx, dy] of dirs) {
      const nx = x + dx * chg
      const ny = y + dy * chg
      const nRes = fn(nx, ny, positions)
      if(nRes < res) {
        res = nRes
        x = nx
        y = ny
        zoom = false
        break
      }
    }
    if(zoom) chg /= 2
  }
  return res
};

function fn(x, y, arr) {
  let res = 0
  const n = arr.length
  for(let i = 0; i < n; i++) {
    res += Math.sqrt((x - arr[i][0]) ** 2 + (y - arr[i][1]) ** 2)
  }
  return res
}
