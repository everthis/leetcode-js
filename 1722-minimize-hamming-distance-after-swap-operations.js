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
/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
const minimumHammingDistance = function (source, target, allowedSwaps) {
  const n = target.length
  const uf = new UnionFind(n)
  for (let A of allowedSwaps) {
    const i = A[0],
      j = A[1]
    uf.union(i, j)
  }
  const M = {}
  for (let i = 0; i < n; i++) {
    const j = uf.find(i)
    if (M[j] == null) M[j] = {}
    if (M[j][source[i]] == null) M[j][source[i]] = 0
    M[j][source[i]]++
  }
  let res = 0
  for (let i = 0; i < n; i++) {
    const j = uf.find(i)
    if (M[j][target[i]]) {
      if (!--M[j][target[i]]) {
        delete M[j][target[i]]
      }
    } else res++
  }
  return res
}
