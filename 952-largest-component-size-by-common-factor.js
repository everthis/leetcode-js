/**
 * @param {number[]} A
 * @return {number}
 */
class UF {
  constructor(N) {
    this.parent = []
    this.size = []
    this.max = 1
    for (let i = 0; i < N; i++) {
      this.parent[i] = i
      this.size[i] = 1
    }
  }
  find(x) {
    if (x === this.parent[x]) {
      return x
    }
    return (this.parent[x] = this.find(this.parent[x]))
  }
  union(x, y) {
    let rootX = this.find(x)
    let rootY = this.find(y)
    if (rootX != rootY) {
      this.parent[rootX] = rootY
      this.size[rootY] += this.size[rootX]
      this.max = Math.max(this.max, this.size[rootY])
    }
  }
}
const largestComponentSize = A => {
  let N = A.length
  const map = {} // key is the factor, val is the node index
  const uf = new UF(N)
  for (let i = 0; i < N; i++) {
    let a = A[i]
    for (let j = 2; j * j <= a; j++) {
      if (a % j == 0) {
        if (!map.hasOwnProperty(j)) {
          //this means that no index has claimed the factor yet
          map[j] = i
        } else {
          //this means that one index already claimed, so union that one with current
          uf.union(i, map[j])
        }
        if (!map.hasOwnProperty(a / j)) {
          map[a / j] = i
        } else {
          uf.union(i, map[a / j])
        }
      }
    }
    if (!map.hasOwnProperty(a)) {
      //a could be factor too. Don't miss this
      map[a] = i
    } else {
      uf.union(i, map[a])
    }
  }
  return uf.max
}
