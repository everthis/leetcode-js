/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
const findMaxValueOfEquation = function (points, k) {
  let res = -Number.MAX_VALUE
  const deque = []
  for (let i = 0; i < points.length; i++) {
    const x = points[i][0]
    const y = points[i][1]
    while (deque.length != 0 && x - deque[0][1] > k) {
      deque.shift()
    }
    if (deque.length != 0) {
      res = Math.max(res, deque[0][0] + x + y)
    }
    while (deque.length != 0 && deque[deque.length - 1][0] <= y - x) {
      deque.pop()
    }
    deque.push([y - x, x])
  }
  return res
}

// another

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
const findMaxValueOfEquation = function (points, k) {
  const pq = new PriorityQueue((a, b) =>
    a[0] === b[0] ? a[1] < b[1] : b[0] < a[0]
  )
  let res = -Infinity
  for (let point of points) {
    while (!pq.isEmpty() && point[0] - pq.peek()[1] > k) {
      pq.pop()
    }
    if (!pq.isEmpty()) {
      res = Math.max(res, pq.peek()[0] + point[0] + point[1])
    }
    pq.push([point[1] - point[0], point[0]])
  }
  return res
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
