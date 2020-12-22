/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const distanceLimitedPathsExist = function (n, edgeList, queries) {
  edgeList.sort((a, b) => a[2] - b[2])
  const m = queries.length
  const ans = Array(m).fill(false)
  const order = Array(m).fill(0)
  for (let i = 0; i < m; ++i) order[i] = i
  order.sort((i, j) => queries[i][2] - queries[j][2])
  const uf = new UnionFind(n)
  let idx = 0
  for (let i of order) {
    const limit = queries[i][2]
    while (idx < edgeList.length && edgeList[idx][2] < limit) {
      const u = edgeList[idx][0],
        v = edgeList[idx][1]
      uf.union(u, v)
      idx++
    }
    const u0 = queries[i][0],
      v0 = queries[i][1]
    if (uf.find(u0) === uf.find(v0)) ans[i] = true
  }
  return ans
}
class UnionFind {
  constructor(n) {
    this.parents = Array(n)
      .fill(0)
      .map((e, i) => i)
    this.ranks = Array(n).fill(0)
  }
  root(x) {
    while (x !== this.parents[x]) {
      this.parents[x] = this.parents[this.parents[x]]
      x = this.parents[x]
    }
    return x
  }
  find(x) {
    return this.root(x)
  }
  check(x, y) {
    return this.root(x) === this.root(y)
  }
  union(x, y) {
    const [rx, ry] = [this.find(x), this.find(y)]
    if (this.ranks[rx] >= this.ranks[ry]) {
      this.parents[ry] = rx
      this.ranks[rx] += this.ranks[ry]
    } else if (this.ranks[ry] > this.ranks[rx]) {
      this.parents[rx] = ry
      this.ranks[ry] += this.ranks[rx]
    }
  }
}
