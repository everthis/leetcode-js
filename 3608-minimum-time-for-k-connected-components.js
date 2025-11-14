/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var minTime = function(n, edges, k) {
  edges.sort((a, b) => b[2] - a[2])
  const uf = new UF(n)
  let cnt = n
  
  for(let i = 0; i < edges.length; i++) {
    const [u, v, t] = edges[i]
    if(uf.union(u, v)) cnt--
    if(cnt < k) return t
  }
  return 0
};

class UF {
  constructor(n) {
    this.root = Array(n).fill(null).map((_, i) => i)
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
    if(xr === yr) {
      return false
    } else {
      this.root[yr] = xr
      return true
    }

  }
}
