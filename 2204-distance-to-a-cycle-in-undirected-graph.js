/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const distanceToCycle = function(n, edges) {
  const hash = {}
  let graph = new Map()
  for(const [u, v] of edges) {
    if(graph.get(u) == null) graph.set(u, new Set()) 
    if(graph.get(v) == null) graph.set(v, new Set())
    graph.get(u).add(v)
    graph.get(v).add(u)
  }
  
  const clonedGraph = new Map()
  for(const [k, v] of graph) {
    clonedGraph.set(k, new Set(v))
  }
  
  let level = 0
  let q = []
  const visited = new Set()
  for(const [k, v] of graph) {
    if(graph.get(k).size === 1) {
      q.push(k)  
    }    
  }

  while(q.length) {
    const size = q.length
    const nxt = []
    for(let i = 0; i < size; i++) {
      const cur = q[i]
      for(const e of (graph.get(cur) || [])) {
        graph.get(e).delete(cur)
        if(graph.get(e).size === 1) {
          nxt.push(e)
        }
      }
    }
    q = nxt
  }

  q = []

  visited.clear()
  for(const [k, v] of graph) {
    if(v.size === 2) {
      q.push(k)
      visited.add(k)
    }
  }
  const res = Array(n).fill(0)  
  graph = clonedGraph
  while(q.length) {
    level++
    const size = q.length
    const nxt = []
    for(let i = 0; i < size; i++) {
      const cur = q[i]
      for(const e of (graph.get(cur) || [])) {
        if(!visited.has(e)) {
          nxt.push(e)
          res[e] = level
          visited.add(e)
        }
      }
    }

    q = nxt
  }

  return res
};
