const initializeGraph = (n) => {
  let g = []
  for (let i = 0; i < n; i++) {
    g.push([])
  }
  return g
}
const packDGCost = (g, ig, edges) => {
  for (const [u, v, cost] of edges) {
    g[u].push([v, cost])
    ig[v].push([u, cost])
  }
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} src1
 * @param {number} src2
 * @param {number} dest
 * @return {number}
 */
var minimumWeight = function(n, edges, src1, src2, dest) {
  let g = initializeGraph(n),
    ig = initializeGraph(n)
  packDGCost(g, ig, edges)
  /*
        src1 -> x
        src2 -> x
        x -> dest  find smallest distance from all nodes to the destination, run Dijkstra in reverse from the destination
     */
  let d1 = dijkstra(g, src1),
    d2 = dijkstra(g, src2),
    d3 = dijkstra(ig, dest),
    res = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < n; i++) res = Math.min(res, d1[i] + d2[i] + d3[i])
  return res == Number.MAX_SAFE_INTEGER ? -1 : res
}

const dijkstra = (g, start) => {
  // store the shortest distance from startNode to all other nodes
  let n = g.length,
    dis = Array(n).fill(Number.MAX_SAFE_INTEGER)
  let pq = new MinPriorityQueue({
    compare: (x, y) => {
      if (x[0] != y[0]) return x[0] - y[0]
      return x[1] - y[1]
    },
  })
  dis[start] = 0
  pq.enqueue([start, 0])
  while (pq.size()) {
    let [cur, d] = pq.dequeue()
    if (d > dis[cur]) continue // larger distance, no need to find the route to next node
    for (const [child, cost] of g[cur]) {
      let toChildCost = d + cost
      if (toChildCost < dis[child]) {
        // each time total wight/cost to current child is smaller, updated it
        dis[child] = toChildCost
        pq.enqueue([child, toChildCost])
      }
    }
  }
  return dis    
};
