/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = function (edges) {
  const uf = {}
  for (let edge of edges) {
    let u = edge[0]
    let v = edge[1]
    if (find(u) === find(v)) {
      return edge
    } else {
      union(u, v)
    }
  }
  function union(a, b) {
    uf[find(a)] = uf[find(b)]
  }
  function find(x) {
    if (!uf[x]) uf[x] = x
    if (uf[x] === x) return x
    return find(uf[x])
  }
}
