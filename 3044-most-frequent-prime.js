/**
 * @param {number[][]} mat
 * @return {number}
 */
var mostFrequentPrime = function (mat) {
  const DIRS = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]

  const m = mat.length
  const n = mat[0].length
  const f = new Map()

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (const d of DIRS) {
        let t = 0
        for (
          let k = i, l = j;
          k >= 0 && k < m && l >= 0 && l < n;
          k += d[0], l += d[1]
        ) {
          t = t * 10 + mat[k][l]
          f.set(t, (f.get(t) || 0) + 1)
        }
      }
    }
  }

  let res = -1
  let maxF = 0

  for (const [val, freq] of f.entries()) {
    if (val <= 10) continue
    if (freq >= maxF && isPrime(val)) {
      if (freq === maxF) {
        res = Math.max(res, val)
      } else {
        res = val
      }
      maxF = freq
    }
  }

  return res
}
function isPrime(N) {
  if (N < 2) return false
  const R = Math.sqrt(N)
  for (let d = 2; d <= R; ++d) {
    if (N % d === 0) return false
  }
  return true
}
