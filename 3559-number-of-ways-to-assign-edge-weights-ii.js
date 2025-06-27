/**
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var assignEdgeWeights = function (edges, queries) {
  const n = edges.length + 1,
    graph = Array(n)
      .fill(0)
      .map(() => [])
  for (let [u, v] of edges) {
    graph[u - 1].push(v - 1)
    graph[v - 1].push(u - 1)
  }
  const directParent = Array(n),
    depth = Array(n)
  dfs(0, -1, 0)
  const lca = new LCA(n, directParent, depth)
  const answer = [],
    MOD = 1000000007n
  for (let [u, v] of queries) {
    const pathLen = lca.getDist(u - 1, v - 1)
    const ways = pathLen === 0 ? 0n : 2n ** BigInt(pathLen - 1)
    answer.push(Number(ways % MOD))
  }
  return answer

  function dfs(node, parent, currDepth) {
    directParent[node] = parent
    depth[node] = currDepth
    for (let nei of graph[node]) {
      if (nei === parent) continue
      dfs(nei, node, currDepth + 1)
    }
  }
}

class LCA {
  constructor(n, parent, depths) {
    this.maxDepth = Math.ceil(Math.log2(n))
    this.p = Array(this.maxDepth + 1)
      .fill(0)
      .map(() => Array(n).fill(-1)) // parents
    this.depths = depths
    for (let node = 0; node < n; node++) {
      this.p[0][node] = parent[node]
    }
    for (let pow2 = 1; pow2 <= this.maxDepth; pow2++) {
      for (let node = 0; node < n; node++) {
        const halfParent = this.p[pow2 - 1][node]
        if (halfParent !== -1) {
          this.p[pow2][node] = this.p[pow2 - 1][halfParent]
        }
      }
    }
  }
  getLCA(a, b) {
    if (this.depths[a] > this.depths[b]) {
      let temp = a
      a = b
      b = temp
    }
    let depthDiff = this.depths[b] - this.depths[a]
    for (let i = 0; i <= this.maxDepth; i++) {
      if ((depthDiff >> i) & 1) {
        b = this.p[i][b] // move b up to the 2^ith parent
      }
    }
    if (a === b) return a

    // move both nodes up by 2^ith levels if the 2^ith parents are not equal
    for (let i = this.maxDepth; i >= 0; i--) {
      // this decrements so that we can jump the nodes up incrementally
      if (this.p[i][a] !== this.p[i][b]) {
        // if 2^ith parents of both nodes are not equal, we can safely both move up
        a = this.p[i][a]
        b = this.p[i][b]
      }
    }
    return this.p[0][a]
  }
  getDist(a, b) {
    const lca = this.getLCA(a, b)
    const depthA = this.depths[a] - this.depths[lca]
    const depthB = this.depths[b] - this.depths[lca]
    return depthA + depthB
  }
}
