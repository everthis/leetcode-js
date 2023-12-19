/**
 * @param {number[][]} coordinates
 * @param {number} k
 * @return {number}
 */
const countPairs = function(coordinates, k) {
  const hash = new Map()
  const n = coordinates.length
  let res = 0
  for(let i = 0; i < n; i++) {
    const [x, y] = coordinates[i]
    for(let v = 0; v <= k; v++) {
      const xx = v ^ x
      const yy = (k - v) ^ y
      const key = `${xx},${yy}`
      res += hash.get(key) || 0
    }
    const kk = `${x},${y}`
    hash.set(kk, (hash.get(kk) || 0) + 1)
  }
  
  return res
};
