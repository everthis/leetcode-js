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

/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
const maxPoints = function (grid, queries) {
  const m = grid.length, n = grid[0].length, k = queries.length
  const q = [...queries]
  const pq = new PQ((a, b) => a[1] < b[1])
  const dirs = [[0, 1],[0, -1],[1, 0],[-1,0]]
  
  q.sort((a, b) => a - b)
  const hash = {}
  const visited = Array.from({ length: m }, () => Array(n).fill(false))

  pq.push([[0, 0], grid[0][0]])
  visited[0][0] = true

  let cnt = 0
  for(const e of q) {
    while(!pq.isEmpty()) {
      const [coord, v] = pq.peek()
      const [r, c] = coord
      if(e <= v) break
      pq.pop()
      for(const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc
        if(nr >= 0 && nr < m && nc >= 0 && nc < n && visited[nr][nc] === false) {
          visited[nr][nc] = true
          pq.push([[nr, nc], grid[nr][nc]])
        }
      }
      cnt++
    }

    hash[e] = cnt
  }
// console.log(hash)
  return queries.map(e => hash[e])
}

// another


/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
const maxPoints = function (grid, queries) {
  const heap = new MinPriorityQueue({
    compare: ({ value: valueA }, { value: valueB }) => valueA - valueB,
  })

  const enqueue = (r, c) => {
    if (
      0 <= r &&
      r < grid.length &&
      0 <= c &&
      c < grid[0].length &&
      grid[r][c] !== null
    ) {
      heap.enqueue({ row: r, col: c, value: grid[r][c] })
      grid[r][c] = null
    }
  }
  enqueue(0, 0)
  let count = 0
  const map = {}
  const sortedQueries = [...queries].sort((x, y) => x - y)

  for (const query of sortedQueries) {
    while (!heap.isEmpty()) {
      const { row, col, value } = heap.front()
      if (query <= value) break
      heap.dequeue()
      enqueue(row + 1, col)
      enqueue(row - 1, col)
      enqueue(row, col + 1)
      enqueue(row, col - 1)
      ++count
    }

    map[query] = count
  }

  return queries.map((query) => map[query])
}
