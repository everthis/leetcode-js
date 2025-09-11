/**
 * @param {string[]} matrix
 * @return {number}
 */
var minMoves = function (matrix) {
  const n = matrix.length,
    m = matrix[0].length

  const cells = {}
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] !== '.' && matrix[i][j] !== '#') {
        if (!cells[matrix[i][j]]) {
          cells[matrix[i][j]] = []
        }
        cells[matrix[i][j]].push([i, j])
      }
    }
  }

  if (matrix[n - 1][m - 1] === '#') return -1

  const pq = new PQ((a, b) => a[0] < b[0])
  const dist = Array.from({ length: n }, () => Array(m).fill(Infinity))
  const used = new Set()

  pq.push([0, 0, 0])
  dist[0][0] = 0

  const dx = [0, 0, -1, 1]
  const dy = [-1, 1, 0, 0]

  while (!pq.isEmpty()) {
    const [curDist, x, y] = pq.pop()

    if (curDist > dist[x][y]) continue
    if (x === n - 1 && y === m - 1) return curDist

    if (
      matrix[x][y].toUpperCase() === matrix[x][y] &&
      !used.has(matrix[x][y])
    ) {
      used.add(matrix[x][y])

      for (const [newX, newY] of cells[matrix[x][y]] || []) {
        if (curDist < dist[newX][newY]) {
          dist[newX][newY] = curDist
          pq.push([curDist, newX, newY])
        }
      }
    }

    for (let k = 0; k < 4; k++) {
      const nextX = x + dx[k],
        nextY = y + dy[k]

      if (
        isValid(nextX, nextY, n, m, matrix) &&
        curDist + 1 < dist[nextX][nextY]
      ) {
        dist[nextX][nextY] = curDist + 1
        pq.push([curDist + 1, nextX, nextY])
      }
    }
  }

  return -1
}
function isValid(i, j, n, m, matrix) {
  if (i < 0 || j < 0 || i >= n || j >= m) return false
  if (matrix[i][j] === '#') return false
  return true
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
