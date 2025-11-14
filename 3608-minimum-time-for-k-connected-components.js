/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var minTime = function (n, edges, k) {
  let f = Array.from({ length: n }, (_, i) => i)

  edges.sort((a, b) => b[2] - a[2])
  let count = n
  for (const [u, v, t] of edges) {
    if (union(u, v)) {
      count -= 1
    }
    if (count < k) {
      return t
    }
  }
  return 0

  function find(x) {
    if (x === f[x]) {
      return x
    }
    f[x] = find(f[x])
    return f[x]
  }

  function union(x, y) {
    x = find(x)
    y = find(y)
    if (x === y) {
      return false
    }
    f[x] = y
    return true
  }
}
