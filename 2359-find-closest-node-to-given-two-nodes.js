/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
const closestMeetingNode = function(edges, node1, node2) {
  const graph = {}
  const n = edges.length
  for(let i = 0; i < n; i++) {
    const e = edges[i]
    if(graph[i] == null) graph[i] = new Set()
    if(e !== -1) graph[i].add(e)
  }
  
  const dis1 = bfs(node1), dis2 = bfs(node2)
  // console.log(dis1, dis2)
  let min = Infinity, res= -1
  
  for(let i = 0; i < n; i++) {
    const disa = dis1[i], disb = dis2[i]
    if(disa !== Infinity && disb !== Infinity) {
      const tmp = Math.min(min, Math.max(disa, disb))
      if(tmp < min) {
        res = i
        min = tmp
      }
    }
    
  }
  
  return res
  
  function bfs(node) {
      const dis1 = Array(n).fill(Infinity)
      dis1[node] = 0
      const visited = new Set()
      visited.add(node)
      let q = [node], dis = 0

      while(q.length) {
        const size = q.length
        const nxt = []
        dis++
        for(let i = 0; i < size; i++) {
          const cur = q[i]
          const tmp = graph[cur]
          if(tmp) {
            for(const e of tmp) {
              if(visited.has(e)) continue
              nxt.push(e)
              visited.add(e)
              dis1[e] = dis
            }
          }
        }
        q = nxt
      }
    return dis1
  }
  
};
