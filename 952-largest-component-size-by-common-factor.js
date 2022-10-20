/**
 * @param {number[]} nums
 * @return {number}
 */
const largestComponentSize = function (nums) {
  const { sqrt } = Math
  const n = nums.length
  const uf = new UF(n)
  const primes = {}
  for (let i = 0; i < n; i++) {
    const num = nums[i]
    const prSet = primesSet(num)
    for (const e of prSet) {
      if (primes[e] == null) primes[e] = []
      primes[e].push(i)
    }
  }

  const vals = Object.values(primes)
  for(const idxArr of vals) {
    const len = idxArr.length
    for(let i = 0; i < len - 1; i++) {
      uf.union(idxArr[i], idxArr[i + 1])
    }
  }
  let res = 0
  const hash = {}
  for(let i = 0; i < n; i++) {
    const root = uf.find(i)
    if(hash[root] == null) hash[root] = 0
    hash[root]++
  }
  return Math.max(...Object.values(hash))

  function primesSet(n) {
    const limit = ~~(sqrt(n) + 1)
    for (let i = 2; i < limit; i++) {
      if (n % i === 0) {
        const res = primesSet(n / i)
        res.add(i)
        return res
      }
    }
    return new Set([n])
  }
}

class UF {
  constructor(n) {
    this.root = Array(n)
      .fill(null)
      .map((_, i) => i)
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

// another


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
