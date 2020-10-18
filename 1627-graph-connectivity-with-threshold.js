/**
 * @param {number} n
 * @param {number} threshold
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const areConnected = function (n, threshold, queries) {
  const arr = []
  const uf = new UnionFind(n)
  setup(n, threshold, uf)
  for (let i = 0, len = queries.length; i < len; i++) {
    arr.push(uf.check(queries[i][0], queries[i][1]))
  }
  return arr
}

function setup(n, t, uf) {
  t++
  for (let i = t; i <= n; i++) {
    let m = 1
    while (i * m <= n) {
      uf.union(i, i * m)
      m += 1
    }
  }
}
class UnionFind {
  constructor(n) {
    this.parents = Array(n + 1)
      .fill(0)
      .map((e, i) => i)
    this.ranks = Array(n + 1).fill(0)
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
