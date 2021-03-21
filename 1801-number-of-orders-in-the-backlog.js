/**
 * @param {number[][]} orders
 * @return {number}
 */
const getNumberOfBacklogOrders = function (orders) {
  const h0 = new PriorityQueue((a, b) => a[0] > b[0])
  const h1 = new PriorityQueue((a, b) => a[0] > b[0])
  const P = 10 ** 9 + 7
  const { min } = Math

  while (!h0.isEmpty()) h0.pop()
  while (!h1.isEmpty()) h1.pop()
  let i,
    j,
    i1,
    j1,
    ans = 0
  for (let c of orders) {
    i = c[0]
    j = c[1]
    if (c[2]) {
      while (!h0.isEmpty() && h0.peek()[0] >= i) {
        i1 = h0.peek()[0]
        j1 = h0.peek()[1]
        h0.pop()
        if (j > j1) j -= j1
        else {
          j1 -= j
          j = 0
          if (j1) h0.push([i1, j1])
          break
        }
      }
      if (j) h1.push([-i, j])
    } else {
      while (!h1.isEmpty() && -h1.peek()[0] <= i) {
        i1 = h1.peek()[0]
        j1 = h1.peek()[1]
        h1.pop()
        if (j > j1) j -= j1
        else {
          j1 -= j
          j = 0
          if (j1) h1.push([i1, j1])
          break
        }
      }
      if (j) h0.push([i, j])
    }
  }
  while (!h0.isEmpty()) {
    ans += h0.peek()[1]
    h0.pop()
    if (ans >= P) ans -= P
  }
  while (!h1.isEmpty()) {
    ans += h1.peek()[1]
    h1.pop()
    if (ans >= P) ans -= P
  }
  return ans
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
