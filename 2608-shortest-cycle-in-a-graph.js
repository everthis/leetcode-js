/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const findShortestCycle = function(n, edges) {
  let res = Infinity
  const graph = new Map()
  for(const [u, v] of edges) {
    if(graph.get(u) == null) graph.set(u, [])
    if(graph.get(v) == null) graph.set(v, [])
    graph.get(u).push(v)
    graph.get(v).push(u)
  }
  for(let i = 0; i < n; i++) {
    bfs(i)
  }
  
  if(res === Infinity) return -1
  return res
  
  function bfs(src) {
    const parent = Array(n), dis = Array(n).fill(Infinity)
    let q = []
    dis[src] = 0
    q.push(src)
    while(q.length) {
      const node = q.shift()
      for(const nxt of (graph.get(node) || [])) {
        if(dis[nxt] === Infinity) {
          dis[nxt] = dis[node] + 1
          parent[nxt] = node
          q.push(nxt)
        } else if(parent[node] !== nxt && parent[nxt] !== node) {
          res = Math.min(res, dis[nxt] + dis[node] + 1)          
        }
      }
    }
  }
};
