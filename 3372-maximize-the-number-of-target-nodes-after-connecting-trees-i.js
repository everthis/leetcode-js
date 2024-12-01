/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2, k) {
  const n = edges1.length + 1
  const m = edges2.length + 1

  const adj1 = Array.from({ length: n }, () => [])
  const adj2 = Array.from({ length: m }, () => [])

  for (const edge of edges1) {
    const [u, v] = edge
    adj1[u].push(v)
    adj1[v].push(u)
  }
  for (const edge of edges2) {
    const [u, v] = edge
    adj2[u].push(v)
    adj2[v].push(u)
  }

  const good1 = new Array(n).fill(0)
  const good2 = new Array(m).fill(0)

  for (let i = 0; i < n; i++) {
    dfs(i, -1, 0, i, k + 1, good1, adj1)
  }

  for (let i = 0; i < m; i++) {
    dfs(i, -1, 0, i, k, good2, adj2)
  }

  const mx = Math.max(...good2)

  const res = new Array(n)
  for (let i = 0; i < n; i++) {
    res[i] = good1[i] + mx
  }
  return res
}

function dfs(node, parent, distance, root, k, good, adj) {
  if (distance >= k) return
  good[root]++
  for (const neighbor of adj[node]) {
    if (neighbor !== parent) {
      dfs(neighbor, node, distance + 1, root, k, good, adj)
    }
  }
}
