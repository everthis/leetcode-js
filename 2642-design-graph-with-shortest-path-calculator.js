/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
/**
 * @param {number} n
 * @param {number[][]} edges
 */
const Graph = function (n, edges) {
  this.map = new Map()
  const map = this.map
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i]
    let from = edge[0]
    let to = edge[1]
    let cost = edge[2]
    if (!map.has(from)) {
      map.set(from, new Set())
    }

    map.get(from).add({ to, cost })
  }
}

/**
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function (edge) {
  let map = this.map
  let from = edge[0]
  let to = edge[1]
  let cost = edge[2]
  if (!map.has(from)) {
    map.set(from, new Set())
  }

  map.get(from).add({ to, cost })
}

/**
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function (node1, node2) {
  const heap = new MinPriorityQueue()
  heap.enqueue({ node: node1, cost: 0 }, 0)
  let visited = new Set()

  while (heap.size() > 0) {
    const top = heap.dequeue().element

    if (visited.has(top.node)) {
      continue
    }
    visited.add(top.node)
    if (top.node === node2) {
      return top.cost
    }
    let next = this.map.get(top.node)
    if (next) {
      for (let n of next) {
        heap.enqueue({ node: n.to, cost: top.cost + n.cost }, top.cost + n.cost)
      }
    }
  }

  return -1
}

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
