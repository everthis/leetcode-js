/**
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath = function (heights) {
  const d = [0, 1, 0, -1, 0]
  let lo = 0,
    hi = 10 ** 6 + 1
  while (lo < hi) {
    let effort = lo + ((hi - lo) >> 1)
    if (isPath(heights, effort)) {
      hi = effort
    } else {
      lo = effort + 1
    }
  }
  return lo
  function isPath(h, effort) {
    const m = h.length,
      n = h[0].length
    const q = []
    q.push([0, 0])
    const seen = new Set()
    seen.add(0)
    while (q.length) {
      const cur = q.shift()
      const x = cur[0],
        y = cur[1]
      if (x === m - 1 && y === n - 1) {
        return true
      }
      for (let k = 0; k < 4; k++) {
        const r = x + d[k],
          c = y + d[k + 1]
        if(seen.has(r * n + c)) continue
        if (
          0 <= r &&
          r < m &&
          0 <= c &&
          c < n &&
          effort >= Math.abs(h[r][c] - h[x][y])
        ) {
          seen.add(r * n + c)
          q.push([r, c])
        }
      }
    }
    return false
  }
}

// another

/**
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath = function(heights) {
  const rows = heights.length
  const cols = heights[0].length
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]]
  const dist = Array.from({ length: rows }, () => Array(cols).fill(Infinity))
  const pq = new PriorityQueue()
  pq.push([0, 0, 0])
  dist[0][0] = 0
  while(pq.size) {
    const cur = pq.pop()
    if(cur[1] === rows - 1 && cur[2] === cols - 1) return cur[0]
    for(let dir of dirs) {
      const nr = cur[1] + dir[0]
      const nc = cur[2] + dir[1]
      if(nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue
      const diff = Math.max(cur[0], Math.abs(heights[nr][nc] - heights[cur[1]][cur[2]]))
      if(dist[nr][nc] > diff) {
        dist[nr][nc] = diff
        pq.push([diff, nr, nc])
      }
    }
  }
  return 0
};

class PriorityQueue {
  constructor(comparator = (a, b) => a[0] < b[0]) {
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

