/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
const mostProfitablePath = function(edges, bob, amount) {
  const graph = [], depth = [], parent = []
  for(const [u, v] of edges) {
    if(graph[u] == null) graph[u] = []
    if(graph[v] == null) graph[v] = []
    graph[u].push(v)
    graph[v].push(u)
  }
  dfs(0)
  let cur = bob, bobh = 0
  while(cur) {
    if(depth[cur] > bobh) amount[cur] = 0
    else if(depth[cur] === bobh) amount[cur] /= 2

    bobh++
    cur = parent[cur]
  }
  
  // console.log(depth, parent, amount)

  return dfs2(0)

  function dfs(node, p = 0, d = 0) {
    parent[node] = p
    depth[node] = d
    for(const e of graph[node]) {
        if(e === p) continue
        dfs(e, node, d + 1)
    }
  }

  function dfs2(node, p = 0) {
    let res = amount[node]
    let ma = -Infinity
    for(const e of graph[node]) {
        if(e === p) continue
        ma = Math.max(ma, dfs2(e, node))
    }
    if(ma === -Infinity) return res
    return res + ma
  }
};
