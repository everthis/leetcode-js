class PQ {
  constructor(comparator = (a, b) => a > b) {
    this.heap = []
    this.top = 0
    this.comparator = comparator
  }
  size() {
    return this.heap.length
  }
  isEmpty() {
    return this.size() === 0
  }
  peek() {
    return this.heap[this.top]
  }
  push(...values) {
    values.forEach((value) => {
      this.heap.push(value)
      this.siftUp()
    })
    return this.size()
  }
  pop() {
    const poppedValue = this.peek()
    const bottom = this.size() - 1
    if (bottom > this.top) {
      this.swap(this.top, bottom)
    }
    this.heap.pop()
    this.siftDown()
    return poppedValue
  }
  replace(value) {
    const replacedValue = this.peek()
    this.heap[this.top] = value
    this.siftDown()
    return replacedValue
  }

  parent = (i) => ((i + 1) >>> 1) - 1
  left = (i) => (i << 1) + 1
  right = (i) => (i + 1) << 1
  greater = (i, j) => this.comparator(this.heap[i], this.heap[j])
  swap = (i, j) => ([this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]])
  siftUp = () => {
    let node = this.size() - 1
    while (node > this.top && this.greater(node, this.parent(node))) {
      this.swap(node, this.parent(node))
      node = this.parent(node)
    }
  }
  siftDown = () => {
    let node = this.top
    while (
      (this.left(node) < this.size() && this.greater(this.left(node), node)) ||
      (this.right(node) < this.size() && this.greater(this.right(node), node))
    ) {
      let maxChild =
        this.right(node) < this.size() &&
        this.greater(this.right(node), this.left(node))
          ? this.right(node)
          : this.left(node)
      this.swap(node, maxChild)
      node = maxChild
    }
  }
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @param {number} target
 * @return {number[][]}
 */
const modifiedGraphEdges = function (n, edges, source, destination, target) {
  const kMax = 1e9
  const graph = Array(n)
    .fill(null)
    .map(() => [])

  for (const [u, v, w] of edges) {
    if (w === -1) {
      continue
    }
    graph[u].push([v, w])
    graph[v].push([u, w])
  }

  const distToDestination = dijkstra(graph, source, destination)
  if (distToDestination < target) {
    return []
  }
  if (distToDestination === target) {
    // Change the weights of negative edges to an impossible value.
    for (const edge of edges) {
      if (edge[2] === -1) {
        edge[2] = kMax
      }
    }
    return edges
  }

  for (let i = 0; i < edges.length; i++) {
    const [u, v, w] = edges[i]
    if (w !== -1) {
      continue
    }
    edges[i][2] = 1
    graph[u].push([v, 1])
    graph[v].push([u, 1])
    const distToDestination = dijkstra(graph, source, destination)
    if (distToDestination <= target) {
      edges[i][2] += target - distToDestination
      // Change the weights of negative edges to an impossible value.
      for (let j = i + 1; j < edges.length; j++) {
        if (edges[j][2] === -1) {
          edges[j][2] = kMax
        }
      }
      return edges
    }
  }

  return []
}

function dijkstra(graph, src, dst) {
  const dist = Array(graph.length).fill(Infinity)
  const minHeap = new PQ((a, b) => a[0] < b[0])

  dist[src] = 0
  minHeap.push([dist[src], src])

  while (!minHeap.isEmpty()) {
    const [d, u] = minHeap.pop()
    for (const [v, w] of graph[u] || []) {
      if (d + w < dist[v]) {
        dist[v] = d + w
        minHeap.push([dist[v], v])
      }
    }
  }

  return dist[dst]
}
