/**
 * @param {number[][]} edges
 * @return {number}
 */
const treeDiameter = function (edges) {
  const graph = {}
  for (const [u, v] of edges) {
    if (graph[u] == null) graph[u] = new Set()
    if (graph[v] == null) graph[v] = new Set()
    graph[u].add(v)
    graph[v].add(u)
  }

  let res = 0

  dfs(0, -1)

  return res
  
  function dfs(node, parent) {
    let first = 0, sec = 0

    for(const nxt of (graph[node] || [])) {
      if(nxt === parent) continue
      const childNum = dfs(nxt, node)
      if(childNum > first) {
        sec = first
        first = childNum
      } else if(childNum > sec){
        sec = childNum
      }
    }

    const nodeNum = first + sec + 1
    res = Math.max(res, nodeNum - 1)
    return first + 1
  }
}
