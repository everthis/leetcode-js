/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxScore = function (n, edges) {
  const G = new Map()
  edges.forEach(([i, j]) => {
    if (!G.has(i)) G.set(i, [])
    if (!G.has(j)) G.set(j, [])
    G.get(i).push(j)
    G.get(j).push(i)
  })

  function get_comp(i) {
    const bfs = [i]
    seen[i] = true
    for (let idx = 0; idx < bfs.length; idx++) {
      const current = bfs[idx]
      for (const j of G.get(current) || []) {
        if (!seen[j]) {
          seen[j] = true
          bfs.push(j)
        }
      }
    }
    return bfs
  }

  const C = []
  const L = []
  const seen = new Array(n).fill(false)
  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      const comp = get_comp(i)
      if (comp.every((x) => (G.get(x) || []).length === 2)) {
        C.push(comp.length)
      } else if (comp.length > 1) {
        L.push(comp.length)
      }
    }
  }

  function calc(l, r, is_cycle) {
    const d = [r, r]
    let res = 0
    for (let a = r - 1; a >= l; a--) {
      const v = d.shift()
      res += v * a
      d.push(a)
    }
    return res + d[0] * d[1] * is_cycle
  }

  let res = 0
  L.sort((a, b) => b - a)
  for (const k of C) {
    res += calc(n - k + 1, n, 1)
    n -= k
  }
  for (const k of L) {
    res += calc(n - k + 1, n, 0)
    n -= k
  }
  return res
}
