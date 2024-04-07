/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function (n, edges, query) {
  const map = new Map()
  const ufs = new UFS(n)

  for (let i = 0; i < edges.length; i++) {
    const [a, b, e] = edges[i]
    ufs.union(a, b)
  }

  for (let i = 0; i < edges.length; i++) {
    const [a, b, e] = edges[i]
    const rootA = ufs.find(a)
    const rootB = ufs.find(b)

    const root = ufs.find(a)
    let tmp = e
    if (map.has(rootA)) {
      tmp = e & map.get(rootA)
    }
    if (map.has(rootB)) {
      tmp = e & map.get(rootB)
    }
    map.set(root, tmp)
  }

  const ans = []
  for (let i = 0; i < query.length; i++) {
    const [s, t] = query[i]
    const rootA = ufs.find(s)
    const rootB = ufs.find(t)

    if (rootA !== rootB) {
      ans.push(-1)
    } else if (s === t) {
      ans.push(0)
    } else {
      ans.push(map.get(rootA))
    }
  }

  return ans
}

class UFS {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, i) => i)
    this.rank = new Array(n).fill(0)
    this.size = n
    this.sz = new Array(n).fill(1)
  }

  find(x) {
    if (x !== this.parent[x]) {
      this.parent[x] = this.find(this.parent[x])
    }
    return this.parent[x]
  }

  union(x, y) {
    const px = this.find(x)
    const py = this.find(y)

    if (px === py) {
      return false
    }

    if (this.rank[px] > this.rank[py]) {
      this.parent[py] = px
      this.sz[px] += this.sz[py]
    } else if (this.rank[px] < this.rank[py]) {
      this.parent[px] = py
      this.sz[py] += this.sz[px]
    } else {
      this.parent[px] = py
      this.sz[py] += this.sz[px]
      this.rank[px]++
    }

    this.size--
    return true
  }

  reset() {
    this.parent = new Array(n).fill(0).map((_, i) => i)
    this.rank = new Array(n).fill(0)
    this.size = n
  }
}
