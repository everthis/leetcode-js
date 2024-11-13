/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countRestrictedPaths = function(n, edges) {
  const g = {}
    for (let [u, v, w] of edges) {
        g[u] = g[u] || []
        g[u].push([v, w])
        g[v] = g[v] || []
        g[v].push([u, w])
    }
    const dist = Array(n + 1).fill(Infinity)
    dist[n] = 0
    const pq = new PQ((a, b) => a[0] < b[0])
    pq.push([0, n])
    while(!pq.isEmpty()) {
        const [d, u] = pq.pop()
        if (d !== dist[u]) continue
        for (let [v, w] of (g[u] || [])) {
            if (dist[v] > dist[u] + w) {
                dist[v] = dist[u] + w
                pq.push([dist[v], v])
            }
        }
    }
    const mod = 1e9 + 7
    const memo = Array(n + 1).fill(null)
    const dfs = (src) => {
        if (memo[src] !== null) return memo[src]
        if (src === n) return 1
        let res = 0
        for (let [v, w] of (g[src] || [])) {
            if (dist[src] > dist[v]) {
                res = (res + dfs(v)) % mod
            }
        }
        return memo[src] = res
    }
    return dfs(1)
};

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

// another


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countRestrictedPaths = function(n, edges) {
  const adj = {}
  const MOD = 10 ** 9 + 7
  for(let edge of edges) {
    const [u,v,d] = edge
    if(adj[u] == null) adj[u] = []
    if(adj[v] == null) adj[v] = []
    adj[u].push([v, d])
    adj[v].push([u, d])
  }
  const dist = Array(n + 1).fill(Infinity)
  dist[n] = 0
  const pq = new PriorityQueue((a, b) => a[0] < b[0])
  pq.push([0, n])
  while(!pq.isEmpty()) {
    const [d, u] = pq.peek()
    pq.pop()
    if(d > dist[u]) continue
    for(let [v, c] of adj[u]) {
      if(d + c < dist[v]) {
        dist[v] = d + c
        pq.push([dist[v], v])
      }
    }
  }
    
  const order = Array(n).fill(0)
  for(let i = 0; i < n; i++) {
    order[i] = i + 1
  }
    
  order.sort((u, v) => dist[u] - dist[v])
  const ans = Array(n + 1).fill(0)
  ans[n] = 1
  for(let u of order) {
    for(let [v, c] of adj[u]) {
      if(dist[v] > dist[u]) {
        ans[v] = (ans[v] + ans[u]) % MOD
      }
    }
  }
    
  return ans[1]
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
 * @param {number[][]} edges
 * @return {number}
 */
const countRestrictedPaths = function(n, edges) {
  if (n === 1) return 0
  const graph = {}
  for(const [u, v, t] of edges) {
    if(graph[u] == null) graph[u] = {}
    if(graph[v] == null) graph[v] = {}
    graph[u][v] = t
    graph[v][u] = t
  }
  const dist = dijkstra(n, graph)
  const memo = Array(n + 1).fill(null)
  const res = dfs(1)
  return res

  function dijkstra(n, graph) {
    const dist = Array(n + 1).fill(Infinity)
    dist[n] = 0
    const pq = new PriorityQueue((a, b) => a[0] < b[0])
    pq.push([0, n])
    while(!pq.isEmpty()) {
      const [d, cur] = pq.pop()
      if(d !== dist[cur]) continue
      for(const next of Object.keys(graph[cur] || {})) {
        const delta = graph[cur][next]
        if(dist[next] > d + delta) {
          dist[next] = d + delta
          pq.push([d + delta, next])
        } 
      }
    }
    return dist
  }

  function dfs(src) {
    if(memo[src] != null) return memo[src]
    if(src === n) return 1
    let res = 0
    for(let next of Object.keys(graph[src] || {})) {
      next = +next
      if(dist[src] > dist[next]) {
        res = ((res + dfs(next)) % (1e9 + 7))
      }
    }
    return memo[src] = res
  }
}
