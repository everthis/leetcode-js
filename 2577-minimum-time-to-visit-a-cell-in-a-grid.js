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
 * @return {number}
 */
const minimumTime = function (grid) {
  if (grid[0][1] > 1 && grid[1][0] > 1) return -1;
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  let m = grid.length,
    n = grid[0].length
  const visited = Array.from({ length: m }, () => Array(n).fill(false))
  const pq = new PQ((a, b) => a[0] < b[0])
  pq.push([grid[0][0], 0, 0])

  while(!pq.isEmpty()) {
    const [v, r, c] = pq.pop()
    if(r === m - 1 && c === n - 1) return v
    if(visited[r][c]) continue
    visited[r][c] = true
    for(const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc
      if(nr >= 0 && nr < m && nc >= 0 && nc < n && visited[nr][nc] === false) {
        const wait = (grid[nr][nc] - v) % 2 === 0 ? 1 : 0
        pq.push([Math.max(v + 1, grid[nr][nc] + wait), nr, nc])
      }
    }
  }

  return -1
}


// another


/**
 * @param {number[][]} grid
 * @return {number}
 */
const minimumTime = function (grid) {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  let m = grid.length,
    n = grid[0].length
  if (grid[0][1] > 1 && grid[1][0] > 1) return -1
  let dist = Array(m)
    .fill(0)
    .map(() => Array(n).fill(Infinity))
  let heap = new Heap((a, b) => a[2] - b[2])
  heap.add([0, 0, 0])
  dist[0][0] = 0

  while (!heap.isEmpty()) {
    let [row, col, time] = heap.remove()
    if (dist[row][col] < time) continue
    if (row === m - 1 && col === n - 1) return time
    for (let [x, y] of directions) {
      let newRow = row + x,
        newCol = col + y
      if (newRow < 0 || newRow >= m || newCol < 0 || newCol >= n) continue
      let diff = grid[newRow][newCol] - time
      let moves = diff % 2 === 1 ? diff : diff + 1
      let weight = grid[newRow][newCol] <= time + 1 ? 1 : moves
      if (dist[newRow][newCol] > time + weight) {
        dist[newRow][newCol] = Math.min(dist[newRow][newCol], time + weight)
        heap.add([newRow, newCol, time + weight])
      }
    }
  }
}

class Heap {
  constructor(comparator = (a, b) => a - b) {
    this.values = []
    this.comparator = comparator
    this.size = 0
  }
  add(val) {
    this.size++
    this.values.push(val)
    let idx = this.size - 1,
      parentIdx = Math.floor((idx - 1) / 2)
    while (
      parentIdx >= 0 &&
      this.comparator(this.values[parentIdx], this.values[idx]) > 0
    ) {
      ;[this.values[parentIdx], this.values[idx]] = [
        this.values[idx],
        this.values[parentIdx],
      ]
      idx = parentIdx
      parentIdx = Math.floor((idx - 1) / 2)
    }
  }
  remove() {
    if (this.size === 0) return -1
    this.size--
    if (this.size === 0) return this.values.pop()
    let removedVal = this.values[0]
    this.values[0] = this.values.pop()
    let idx = 0
    while (idx < this.size && idx < Math.floor(this.size / 2)) {
      let leftIdx = idx * 2 + 1,
        rightIdx = idx * 2 + 2
      if (rightIdx === this.size) {
        if (this.comparator(this.values[leftIdx], this.values[idx]) > 0) break
        ;[this.values[leftIdx], this.values[idx]] = [
          this.values[idx],
          this.values[leftIdx],
        ]
        idx = leftIdx
      } else if (
        this.comparator(this.values[leftIdx], this.values[idx]) < 0 ||
        this.comparator(this.values[rightIdx], this.values[idx]) < 0
      ) {
        if (this.comparator(this.values[leftIdx], this.values[rightIdx]) <= 0) {
          ;[this.values[leftIdx], this.values[idx]] = [
            this.values[idx],
            this.values[leftIdx],
          ]
          idx = leftIdx
        } else {
          ;[this.values[rightIdx], this.values[idx]] = [
            this.values[idx],
            this.values[rightIdx],
          ]
          idx = rightIdx
        }
      } else {
        break
      }
    }
    return removedVal
  }
  top() {
    return this.values[0]
  }
  isEmpty() {
    return this.size === 0
  }
}
