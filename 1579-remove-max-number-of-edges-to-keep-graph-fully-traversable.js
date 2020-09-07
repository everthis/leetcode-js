/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const maxNumEdgesToRemove = function (n, edges) {
  edges.sort((a, b) => b[0] - a[0])
  let edgesAdded = 0
  const bob = new UnionFind(n)
  const alice = new UnionFind(n)
  for (let edge of edges) {
    let type = edge[0],
      one = edge[1],
      two = edge[2]
    switch (type) {
      case 3:
        edgesAdded += bob.unite(one, two) | alice.unite(one, two)
        break
      case 2:
        edgesAdded += bob.unite(one, two)
        break
      case 1:
        edgesAdded += alice.unite(one, two)
        break
    }
  }
  return bob.united() && alice.united() ? edges.length - edgesAdded : -1
}
class UnionFind {
  constructor(n) {
    this.component = []
    this.distinctComponents = n
    for (let i = 0; i <= n; i++) this.component.push(i)
  }
  unite(a, b) {
    const ar = this.find(a)
    if (ar !== this.find(b)) {
      this.component[ar] = b
      this.distinctComponents--
      return true
    }
    return false
  }
  find(a) {
    if (this.component[a] != a) {
      this.component[a] = this.find(this.component[a])
    }
    return this.component[a]
  }
  united() {
    return this.distinctComponents === 1
  }
}
