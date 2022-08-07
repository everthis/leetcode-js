/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
const reachableNodes = function(n, edges, restricted) {
  const graph = {}
  for(const [u, v] of edges) {
    if(graph[u] == null) graph[u] = new Set()
    if(graph[v] == null) graph[v] = new Set()
    graph[u].add(v)
    graph[v].add(u)
  }
  const forbid = new Set(restricted)
  const visited = new Set()
  let res = 0
  let q  = []
  if(!forbid.has(0)) q.push(0)
  visited.add(0)
  while(q.length) {
    const size = q.length
    const tmp = []
    for(let i = 0; i < size; i++) {
      const cur = q[i]
      res++
      for(const e of (graph[cur] || [])) {
        if(!forbid.has(e) && !visited.has(e)) {
          tmp.push(e)
          visited.add(e)
        }
      }
      
    }
    
    q = tmp
  }
  
  
  return res
};
