/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
const numberOfGoodPaths = function (vals, edges) {
  const n = vals.length
  let res = 0
  const adj = Array.from({ length: n }, () => [])
  const sameValues = new Map()
  const valWithIdx = vals.map((v, i) => [v, i])
  valWithIdx.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < n; i++) {
    const [val, idx] = valWithIdx[i]
    if (sameValues.get(val) == null) sameValues.set(val, [])
    sameValues.get(val).push(idx)
  }
  for (const e of edges) {
    const [u, v] = e
    if (vals[u] >= vals[v]) {
      adj[u].push(v)
    } else if (vals[v] >= vals[u]) {
      adj[v].push(u)
    }
  }
  const uf = new UF(n)
  for (const [_, allNodes] of sameValues) {
    for (let u of allNodes) {
      for (const v of adj[u]) {
        uf.union(u, v)
      }
    }
    const group = {}
    for (let u of allNodes) {
      const uroot = uf.find(u)
      if (group[uroot] == null) group[uroot] = 0
      group[uroot]++
    }
    res += allNodes.length
    for (let [_, size] of Object.entries(group)) {
      res += (size * (size - 1)) / 2
    }
  }
  return res
}
class UF {
  constructor(n) {
    this.root = Array(n)
      .fill(null)
      .map((_, i) => i)
  }
  find(x) {
    if (this.root[x] !== x) {
      this.root[x] = this.find(this.root[x])
    }
    return this.root[x]
  }
  union(x, y) {
    const xr = this.find(x)
    const yr = this.find(y)
    this.root[yr] = xr
  }
}
