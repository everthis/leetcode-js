/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
const minCost = function(n, edges, k) {
  const g = {}, {max, floor: flr} = Math
  let low = 0, high = 1, res = 0

  for(let i = 0; i < edges.length; i++) {
    const [u, v, w] = edges[i]
    if(g[u] == null) g[u] = []
    if(g[v] == null) g[v] = []
    g[u].push([v, w])
    g[v].push([u, w])
    high = max(high, w)
  }

  while(low < high) {
    const mid = flr((low + high) / 2)
    if(isOK(g, mid, k)) {
      high = mid
    } else low = mid + 1
  }

  return low


  function isOK(g, mid, k) {
    const n = Object.keys(g).length
    const adj = {}

    for(let i = 0; i < n; i++) {
      if(g[i] == null) continue
      for(const [nxt, w] of g[i]) {
        if(adj[i] == null) adj[i] = []
        if(w <= mid) adj[i].push(nxt)
      }
    }

    const vis = Array(n).fill(false)
    let c = 0

    for(let i = 0; i < n; i++) {
      if(!vis[i]) {
        c++
        if(c > k) return false
        dfs(adj, vis, i)
      }
    }

    return true
  }

  function dfs(adj, vis, node) {
    vis[node] = true
    for(const nxt of (adj[node] || [])) {
      if(!vis[nxt]) dfs(adj, vis, nxt)
    }
  }

};
