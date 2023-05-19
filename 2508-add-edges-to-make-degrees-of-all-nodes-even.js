/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
const isPossible = (n, edges) => {
  const g = initializeGraphSet(n)
  packUG_Set(g, edges)
  return canAddAtMost2EdgesMakeALLNodesDegreeEven(g)
}

function initializeGraphSet(n) {
  const g = []
  for (let i = 0; i < n; i++) {
    g.push(new Set())
  }
  return g
}
function packUG_Set(g, edges) {
  for (const [u, v] of edges) {
    g[u - 1].add(v - 1)
    g[v - 1].add(u - 1)
  }
}

function canAddAtMost2EdgesMakeALLNodesDegreeEven(g) {
  const oddNodes = []
  for (let i = 0; i < g.length; i++) {
    let deg = g[i].size
    if (deg % 2 == 1) {
      oddNodes.push(i)
    }
  }
  if (oddNodes.length == 0) {
    // add no edge
    return true
  } else if (oddNodes.length == 2) {
    // add one edge
    let [a, b] = oddNodes
    for (let k = 0; k < g.length; k++) {
      // a <-> k  b <-> k (k as transition node)
      if (!g[a].has(k) && !g[b].has(k)) return true
    }
    return false
  } else if (oddNodes.length == 4) {
    // add two edges
    let [a, b, c, d] = oddNodes // find two matched pairs valid
    if (!g[a].has(b) && !g[c].has(d)) return true
    if (!g[a].has(c) && !g[b].has(d)) return true
    if (!g[a].has(d) && !g[c].has(b)) return true
    return false
  } else {
    return false
  }
}
