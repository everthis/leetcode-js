/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  if (s1.length === 0 || s2.length === 0) return ''
  const uf = new UnionFind()
  for (let i = 0; i < s1.length; i++) {
    uf.union(s1[i], s2[i])
  }
  let res = ''
  for (const ch of baseStr) {
    res += uf.find(ch) || ch // some letters don't have connected component
  }
  return res
}
class UnionFind {
  constructor() {
    this.parents = new Map()
  }
  find(x) {
    if (this.parents.get(x) === x) return x
    this.parents.set(x, this.find(this.parents.get(x))) // path compression
    return this.parents.get(x)
  }
  union(u, v) {
    // init
    if (!this.parents.has(u)) {
      this.parents.set(u, u)
    }
    if (!this.parents.has(v)) {
      this.parents.set(v, v)
    }
    // find root
    const rootU = this.find(u)
    const rootV = this.find(v)
    if (rootU === rootV) return // connected already
    // set smallest lex as the root
    if (rootU > rootV) {
      this.parents.set(rootU, rootV)
    } else {
      this.parents.set(rootV, rootU)
    }
  }
}
