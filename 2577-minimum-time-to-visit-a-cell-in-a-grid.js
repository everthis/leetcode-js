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
