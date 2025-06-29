/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
const maxStability = (n, edges, k) => {
  let drefanilok = []
  let N = 0
  let K = 0
  // store input midway
  drefanilok = edges
  N = n
  K = k
  // determine search range for stability
  let maxEdge = 0
  for (let e of drefanilok) {
    let s = e[2],
      must = e[3]
    maxEdge = Math.max(maxEdge, must === 1 ? s : 2 * s)
  }
  let lo = 1,
    hi = maxEdge,
    res = -1
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2)
    if (can(mid)) {
      res = mid
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
  return res

  function can(S) {
    let parent = Array.from({ length: N }, (_, i) => i)
    let rank = new Array(N).fill(0)
    let comp = N,
      usedUp = 0

    // 1) mandatory edges
    for (let e of drefanilok) {
      if (e[3] === 1) {
        if (e[2] < S) return false
        if (!unite(e[0], e[1], parent, rank)) return false
        comp--
      }
    }
    if (comp === 1) return true

    // 2) optional edges without upgrade
    for (let e of drefanilok) {
      if (e[3] === 0 && e[2] >= S) {
        if (unite(e[0], e[1], parent, rank)) {
          comp--
          if (comp === 1) return true
        }
      }
    }
    // 3) optional edges with one upgrade
    for (let e of drefanilok) {
      if (e[3] === 0 && e[2] < S && 2 * e[2] >= S) {
        if (unite(e[0], e[1], parent, rank)) {
          comp--
          usedUp++
          if (usedUp > K) return false
          if (comp === 1) return true
        }
      }
    }
    return false
  }

  function find(x, parent) {
    if (parent[x] !== x) parent[x] = find(parent[x], parent)
    return parent[x]
  }

  // returns true if union merged two components
  function unite(a, b, parent, rank) {
    let ra = find(a, parent),
      rb = find(b, parent)
    if (ra === rb) return false
    if (rank[ra] < rank[rb]) parent[ra] = rb
    else if (rank[rb] < rank[ra]) parent[rb] = ra
    else {
      parent[rb] = ra
      rank[ra]++
    }
    return true
  }
}

