const initializeGraph = (n) => {
  let G = []
  for (let i = 0; i < n; i++) {
    G.push([])
  }
  return G
}
const addEdgeToG = (G, Edges) => {
  for (const [u, v] of Edges) {
    G[u].push(v)
    G[v].push(u)
  }
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
const secondMinimum = (n, edges, time, change) => {
  let adj = initializeGraph(n + 1)
  addEdgeToG(adj, edges)
  let cost = initializeGraph(n + 1)
  let pq = new MinPriorityQueue({ priority: (x) => x[0] })
  pq.enqueue([0, 1])
  let green = 2 * change
  while (pq.size()) {
    let cur = pq.dequeue().element
    let [t, node] = cur
    if (cost[node].length == 2) continue
    let nextT =
      t % green < change ? t : (((t + green - 1) / green) >> 0) * green
    let cn = cost[node].length
    if (node == n) {
      if (cn == 0 || cost[node][cn - 1] != t) {
        cost[node].push(t)
      } else {
        continue
      }
    } else {
      if (cn == 0 || cost[node][cn - 1] != nextT) {
        cost[node].push(nextT)
      } else {
        continue
      }
    }
    for (const next_node of adj[node]) pq.enqueue([nextT + time, next_node])
  }
  return cost[n][1]
}
