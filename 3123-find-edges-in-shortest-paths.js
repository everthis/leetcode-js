/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean[]}
 */
var findAnswer = function (n, edges) {
  let graph = {}
  let edgeMapWithIndex = {}

  for (let i = 0; i < n; i++) {
    graph[i] = []
  }

  for (let i = 0; i < edges.length; i++) {
    let [node1, node2, cost] = edges[i]
    graph[node1].push([node2, cost])
    graph[node2].push([node1, cost])
    edgeMapWithIndex[String(node1) + '.' + String(node2)] = i
    edgeMapWithIndex[String(node2) + '.' + String(node1)] = i
  }

  let distance = new Array(n).fill(Infinity)
  distance[0] = 0

  let pq = new PQ((a, b) => a[1] < b[1])

  // node,cost
  pq.push([0, 0, [0]])

  let shortestPath = null
  let visited = new Array(edges.length).fill(false)

  while (!pq.isEmpty()) {
    let [node, currentCost, path] = pq.pop()

    if (node === n - 1) {
      if (shortestPath === null) {
        shortestPath = currentCost
      } else if (shortestPath !== currentCost) {
        continue
      }

      for (let i = 0; i < path.length - 1; i++) {
        let key1 = String(path[i]) + '.' + String(path[i + 1])
        let key2 = String(path[i + 1]) + '.' + String(path[i])

        if (edgeMapWithIndex[key1] !== undefined) {
          visited[edgeMapWithIndex[key1]] = true
        } else if (edgeMapWithIndex[key2] !== undefined) {
          visited[edgeMapWithIndex[key2]] = true
        }
      }
      continue
    }

    if (shortestPath !== null && currentCost >= shortestPath) {
      continue
    }

    let neighbours = graph[node]

    for (let [neighbour, cost] of neighbours) {
      if (currentCost + cost <= distance[neighbour]) {
        distance[neighbour] = currentCost + cost
        pq.push([neighbour, distance[neighbour], [...path, neighbour]])
      }
    }
  }

  return visited
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
