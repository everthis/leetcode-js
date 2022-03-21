/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const countPaths = function(n, roads) {
  const graph = {}
  for(let r of roads) {
    const [u, v, t] = r
    if(graph[u] == null) graph[u] = []
    if(graph[v] == null) graph[v] = []
    graph[u].push([v, t])
    graph[v].push([u, t])
  }
  
  return dijkstra(graph, n, 0)

  function dijkstra(graph, n, src) {
    const dist = Array(n).fill(Infinity)
    const ways = Array(n).fill(0), mod = 1e9 + 7
    ways[src] = 1
    dist[src] = 0
    const pq = new PriorityQueue((a, b) => a[0] === b[0] ? a[1] < b[1] : a[0] < b[0])
    pq.push([0, 0])
    while(!pq.isEmpty()) {
      const [d, u] = pq.pop()
      if(d > dist[u]) continue
      if(graph[u] == null) graph[u] = []
      for(const [v, time] of graph[u]) {
        if(dist[v] > d + time) {
          ways[v] = ways[u]
          dist[v] = d + time
          pq.push([dist[v], v])
        } else if(dist[v] === d + time) {
          ways[v] = (ways[v] + ways[u]) % mod
        }
      }
    }
    return ways[n - 1]
  }
  
};
  
class PriorityQueue {
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

// another

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const countPaths = function(n, roads) {
  const graph = {}, MOD = 1e9 + 7
  for(const [u, v, t] of roads) {
    if(graph[u] == null) graph[u] = {}
    if(graph[v] == null) graph[v] = {}
    graph[u][v] = t
    graph[v][u] = t
  }

  return dijkstra(graph, n, 0)

  function dijkstra(graph, n, src) {
    const dist = Array(n).fill(Infinity)
    const ways = Array(n).fill(0)
    ways[src] = 1
    dist[src] = 0
    const pq = new PriorityQueue((a, b) => a[0] < b[0])
    pq.push([0, 0])
    while(!pq.isEmpty()) {
      const [d, u] = pq.pop()
      if(d > dist[u]) continue
      for(const next of Object.keys(graph[u] || {})) {
        const val = graph[u][next]
        if(dist[next] > d + val) {
          dist[next] = d + val
          ways[next] = ways[u]
          pq.push([dist[next], next])
        } else if(dist[next] === d + val) {
          ways[next] = (ways[next] + ways[u]) % MOD
        }
      }
    }

    return ways[n - 1]
  }
};

class PriorityQueue {
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
