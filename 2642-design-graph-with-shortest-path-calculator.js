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

// another

/**
 * @param {number} n
 * @param {number[][]} edges
 */
const Graph = function(n, edges) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(1e12))
  this.mat = matrix
  this.n = n
  for(let i = 0; i < n; i++) {
    this.mat[i][i] = 0
  }
  for(const [u,v,c] of edges) {
    this.mat[u][v] = c
  }
  for(let k = 0; k < n; k++) {
    for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
        this.mat[i][j] = Math.min(this.mat[i][j], this.mat[i][k] + this.mat[k][j])
      } 
    }
  }
};

/** 
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function(edge) {
  const [u, v, c] = edge
  this.mat[u][v] = Math.min(this.mat[u][v], c)
  const n = this.n
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      this.mat[i][j] = Math.min(this.mat[i][j], this.mat[i][u] + this.mat[v][j] + c)
    } 
  }
};

/** 
 * @param {number} node1 
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function(node1, node2) {
  return this.mat[node1][node2] === 1e12 ? -1 : this.mat[node1][node2]
};

/** 
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
