/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} power
 * @param {number[]} cost
 * @param {number} source
 * @param {number} target
 * @return {number[]}
 */
var minTimeMaxPower = function(n, edges, power, cost, source, target) {
    const adj = Array.from({ length: n }, () => [])
    for(const e of edges) {
        adj[e[0]].push([e[1], e[2]])
    }

    const pq = new PQ((a, b) => a[0] === b[0] ? a[1] < b[1] : a[0] < b[0])
    const mx = Array(n).fill(-1)

    pq.push([0, -power, source])

    while(!pq.isEmpty()) {
        const [time, negpower, u] = pq.pop()
        const cur = -negpower
        if(u === target) return [time, cur]
        if(cur <= mx[u]) continue
        mx[u] = cur
        if(cur < cost[u]) continue
        for(const [v, w] of adj[u]) {
            pq.push([time + w, -(cur - cost[u]), v])
        }
    }



    return [-1, -1]
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
