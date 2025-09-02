/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function(n, edges, time, change) {
  let adj = initializeGraph(n + 1)
  addEdgeToG(adj, edges)
  let cost = initializeGraph(n + 1)
  let pq = new PQ((a, b) => a[0] < b[0])
  pq.push([0, 1])
  let green = 2 * change
  while (pq.size()) {
    let cur = pq.pop()
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
    for (const next_node of adj[node]) pq.push([nextT + time, next_node])
  }
  return cost[n][1]
};
function initializeGraph(n) {
  let G = []
  for (let i = 0; i < n; i++) {
    G.push([])
  }
  return G
}
function addEdgeToG(G, Edges) {
  for (const [u, v] of Edges) {
    G[u].push(v)
    G[v].push(u)
  }
}
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
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
 var secondMinimum = function (n, edges, time, change) {
  const graph = new Map()
  for (let i = 1; i <= n; i++) graph.set(i, [])
  for (const [u, v] of edges) {
    graph.get(u).push(v)
    graph.get(v).push(u)
  }
  const first = Array(n + 1).fill(Infinity)
  const second = Array(n + 1).fill(Infinity)
  first[1] = 0

  const q = new MinPriorityQueue()
  q.enqueue(1, 0)

  while (q.size()) {
    let {element: node, priority: cur} = q.dequeue()
    cur += time // cur: arrival time
    let leave = cur
    if (~~(cur / change) & 1) leave += change - (cur % change)
    for (let nei of graph.get(node)) {
      if (second[nei] <= cur) continue
      if (first[nei] === cur) continue
      if (first[nei] > cur) {
        second[nei] = first[nei]
        first[nei] = cur
      } else {
        second[nei] = cur
      }
      q.enqueue(nei, leave)
    }
  }
  return second[n]
}
