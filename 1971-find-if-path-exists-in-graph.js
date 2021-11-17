/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
const validPath = function(n, edges, start, end) {
  const graph = {}
  for(const [u, v] of edges) {
    if(graph[u] == null) graph[u] = new Set()
    if(graph[v] == null) graph[v] = new Set()
    graph[u].add(v)
    graph[v].add(u)
  }
  const q = [start], visited = new Set()
  visited.add(start)
  while(q.length) {
    const cur = q.shift()
    if(cur === end) return true
    for(const next of graph[cur]) {
      if(visited.has(next)) continue
      q.push(next)
      visited.add(next)
    }
  }

  return false
};
