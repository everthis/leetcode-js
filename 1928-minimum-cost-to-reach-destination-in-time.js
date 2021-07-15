/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */
const minCost = function(maxTime, edges, passingFees) {
  const n = passingFees.length
  const pq = new PriorityQueue((a, b) => a[0] < b[0])
  const graph = {}
  for(let [s, e, t] of edges) {
    if(graph[s] == null) graph[s] = []
    if(graph[e] == null) graph[e] = []
    graph[s].push([e, t])
    graph[e].push([s, t])
  }
  
  const times = {}
  
  pq.push([passingFees[0], 0, 0])
  while(!pq.isEmpty()) {
    const [cost, node, time] = pq.pop()
    
    if(time > maxTime) continue
    if(node === n - 1) return cost
    
    if(times[node] == null || times[node] > time) {
      times[node] = time
      for(let [nxt, ext] of graph[node]) {
        pq.push([cost + passingFees[nxt], nxt, time + ext])
      }
    }
    
  }
  
  return -1
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
