/**
 * @param {number[][]} coordinates
 * @param {number} k
 * @return {number}
 */
var countPairs = function(coordinates, k) {
    const map = new Map();
    const n = coordinates.length;
    const MUL = 1e6
    let res = 0;
    for(let i = 0; i < n; i++) {
        const [x, y] = coordinates[i];
        for(let e = 0; e <= k; e++) {
            const x2 = x ^ e;
            const y2 = (k - e) ^ y;
            const key = code(x2, y2);
            res += map.get(key) || 0;
        }
        const key = code(x, y);
        map.set(key, (map.get(key) || 0) + 1);
    }

    return res

    function code(x, y) {
        return x * MUL + y
    }
};

// another

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
