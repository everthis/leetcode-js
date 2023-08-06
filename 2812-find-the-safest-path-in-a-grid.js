/**
 * @param {number[][]} grid
 * @return {number}
 */
const maximumSafenessFactor = function (grid) {
  let n = grid.length,
    m = grid[0].length,
    ans = Infinity
  const { min, abs } = Math
  let t = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        t.push([i, j]) // keeping track of each thief
      }
    }
  }

  const vis = Array.from({ length: n }, () => Array(m).fill(0))

  const pq = new PQ((a, b) => a[0] > b[0])
  let m_dist = Infinity
  for (const thieve of t) {
    m_dist = Math.min(m_dist, thieve[0] + thieve[1]) // Calculating Manhattan distance between current cell and all thieves
  }
  let dr = [0, -1, 0, 1],
    dc = [-1, 0, 1, 0]
  pq.push([m_dist, [0, 0]])
  vis[0][0] = 1
  // int mn_dist = 0;
  while (!pq.isEmpty()) {
    let temp = pq.pop()

    let dist = temp[0],
      r = temp[1][0],
      c = temp[1][1]
    // mn_dist = min(dist,mn_dist);
    if (r == n - 1 && c == m - 1) {
      return dist // return path safety when end is reached
    }
    for (let i = 0; i < 4; i++) {
      let nr = r + dr[i]
      let nc = c + dc[i]
      if (nr >= 0 && nc >= 0 && nr < n && nc < m && !vis[nr][nc]) {
        //for every adjacent cell calculate the minimum mahattan distance betwwen cell and thieves.
        vis[nr][nc] = 1
        let m_dist = Infinity
        for (let thieve of t) {
          m_dist = min(m_dist, abs(thieve[0] - nr) + abs(thieve[1] - nc))
        }

        // push the minimum of current distance and the minimum distance of the path till now
        pq.push([min(m_dist, dist), [nr, nc]])
      }
    }
  }
  return ans
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
