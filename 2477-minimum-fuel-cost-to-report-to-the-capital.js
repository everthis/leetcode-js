/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
const minimumFuelCost = function(roads, seats) {
  const n = roads.length + 1
  const graph = {}, inDegree = Array(n).fill(0)
  const nodes = Array(n).fill(null).map((e, i) => ([i, 1, 0]))
  for(const [u, v] of roads) {
    if(graph[u] == null) graph[u] = new Set()
    if(graph[v] == null) graph[v] = new Set()
    graph[u].add(nodes[v])
    graph[v].add(nodes[u])
    
    inDegree[u]++
    inDegree[v]++
  }
  const { ceil } = Math
  let q = []
  
  for(let i = 0; i < n; i++) {
    if(inDegree[i] === 1) q.push([i, 1, 0])
  }
  // console.log(q)
  let res = 0
  const visited = new Set()
  
  while(q.length) {
    const nxt = []
    const len = q.length
    for(let i = 0; i < len; i++) {
      const [c, num, sum] = q[i]
      if(c === 0) continue
      for(const node of (graph[c] || [])) {
        const [e] = node
        if(visited.has(e)) continue
        inDegree[e]--        
        // console.log(c, e, sum, num, res)
        if(e === 0) res += ceil(num/ seats) + sum
        else {
          node[1] += num
          node[2] += ceil(num / seats) + sum
          if(inDegree[e] === 1) nxt.push(node)
        }
        // console.log(res)
      }
      visited.add(c)
    }

    q = nxt
    // console.log(q, visited)
  }
  

  return res
};
