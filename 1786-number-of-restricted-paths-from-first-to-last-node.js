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
