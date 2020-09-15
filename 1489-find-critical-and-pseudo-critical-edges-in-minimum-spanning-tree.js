/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
const findCriticalAndPseudoCriticalEdges = function (n, edges) {
  const criticalEdges = [],
    psuedoCriticalEdges = [],
    map = new Map()
  edges.forEach((edge, i) => map.set(edge, i))
  edges.sort((a, b) => a[2] - b[2])
  const buildMST = (pick, skip) => {
    const uf = new UnionFind(n)
    let cost = 0
    if (pick !== null) {
      uf.union(pick[0], pick[1])
      cost += pick[2]
    }
    for (let edge of edges) {
      if (edge !== skip && uf.union(edge[0], edge[1])) cost += edge[2]
    }
    return uf.count === 1 ? cost : Number.MAX_SAFE_INTEGER
  }
  const minCost = buildMST(null, null)
  for (let edge of edges) {
    const index = map.get(edge)
    const costWithout = buildMST(null, edge)
    if (costWithout > minCost) {
      criticalEdges.push(index)
    } else {
      const costWith = buildMST(edge, null)
      if (costWith === minCost) psuedoCriticalEdges.push(index)
    }
  }
  return [criticalEdges, psuedoCriticalEdges]
}
class UnionFind {
  constructor(n) {
    this.parents = Array(n)
      .fill(0)
      .map((e, i) => i)
    this.ranks = Array(n).fill(0)
    this.count = n
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
  union(x, y) {
    const [rx, ry] = [this.find(x), this.find(y)]
    if (this.ranks[rx] >= this.ranks[ry]) {
      this.parents[ry] = rx
      this.ranks[rx] += this.ranks[ry]
    } else if (this.ranks[ry] > this.ranks[rx]) {
      this.parents[rx] = ry
      this.ranks[ry] += this.ranks[rx]
    }
    if (rx !== ry) {
      this.count--
      return true
    } else return false
  }
}
