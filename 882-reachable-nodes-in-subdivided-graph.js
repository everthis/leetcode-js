/**
 * @param {number[][]} edges
 * @param {number} M
 * @param {number} N
 * @return {number}
 */
const reachableNodes = function (edges, M, N) {
  const graph = Array.from({ length: N }, () => Array(N).fill(-1))
  for (let edge of edges) {
    graph[edge[0]][edge[1]] = edge[2]
    graph[edge[1]][edge[0]] = edge[2]
  }
  let result = 0
  const pq = new PriorityQueue((a, b) => a[1] > b[1])
  const visited = new Array(N).fill(false)
  pq.push([0, M])
  while (!pq.isEmpty()) {
    const cur = pq.pop()
    const start = cur[0]
    const move = cur[1]
    if (visited[start]) {
      continue
    }
    visited[start] = true
    result++
    for (let i = 0; i < N; i++) {
      if (graph[start][i] > -1) {
        if (move > graph[start][i] && !visited[i]) {
          pq.push([i, move - graph[start][i] - 1])
        }
        graph[i][start] -= Math.min(move, graph[start][i])
        result += Math.min(move, graph[start][i])
      }
    }
  }
  return result
}

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
