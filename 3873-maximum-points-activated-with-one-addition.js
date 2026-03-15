/**
 * @param {number[][]} points
 * @return {number}
 */
var maxActivated = function(points) {
    const n = points.length, {max} = Math
    if(n === 0) return 1
    const dsu = new UF(n)
    const mx = new Map(), my = new Map()
    for(let i = 0; i < n; i++) {
        const [x, y] = points[i]
        if(mx.has(x)) dsu.union(i, mx.get(x))
        else mx.set(x, i)

        if(my.has(y)) dsu.union(i, my.get(y))
        else my.set(y, i)
    }

    const compSize = new Map()
    for(let i = 0; i < n; i++) {
        const root = dsu.find(i)
        compSize.set(root,  (compSize.get(root) || 0) + 1)
    }
    const sizes = Array.from(compSize.values()).sort((a, b) => b - a)

    let res = 1

    if(sizes.length > 0) res = max(res, sizes[0] + 1)
    if(sizes.length >= 2) res = max(res, sizes[0] + sizes[1] + 1)

    return res
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
    this.root[yr] = xr
  }
}
