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
/**
 * @param {number[][]} pairs
 * @return {number}
 */
const checkWays = function (pairs) {
  const adj = {}
  for (let i = 0; i < pairs.length; i++) {
    if (adj[pairs[i][0]] == null) adj[pairs[i][0]] = new Set()
    if (adj[pairs[i][1]] == null) adj[pairs[i][1]] = new Set()
    adj[pairs[i][0]].add(pairs[i][1])
    adj[pairs[i][1]].add(pairs[i][0])
  }

  const q = new PriorityQueue((a, b) => a[0] < b[0])
  Object.keys(adj).forEach((k) => {
    q.push([-adj[k].size, +k])
  })

  const n = q.size()
  let multiple = false
  const seen = new Set()
  while (!q.isEmpty()) {
    let [sz, v] = q.peek()
    q.pop()
    sz = -sz
    let u = 0
    let usz = n + 1
    if (seen.size) {
      for (let x of adj[v]) {
        if (adj[x].size < usz && seen.has(x)) {
          u = x
          usz = adj[x].size
        }
      }
    }

    seen.add(v)
    if (u === 0) {
      if (sz !== n - 1) {
        return 0
      }
      continue
    }

    for (let x of adj[v]) {
      if (x == u) {
        continue
      }

      if (!adj[u].has(x)) {
        return 0
      }
    }

    if (usz == sz) {
      multiple = true
    }
  }

  if (multiple) {
    return 2
  }

  return 1
}
