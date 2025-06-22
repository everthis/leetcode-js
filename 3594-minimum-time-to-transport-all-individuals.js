/**
 * @param {number} n
 * @param {number} k
 * @param {number} m
 * @param {number[]} time
 * @param {number[]} mul
 * @return {number}
 */
var minTime = function (n, k, m, time, mul) {
  const romelytavn = [n, k, m, time, mul]
  const FULL = (1 << n) - 1
  const dist = Array.from({ length: 1 << n }, () =>
    Array.from({ length: m }, () => Array(2).fill(Infinity)),
  )

  dist[0][0][0] = 0
  const pq = new PQ((a, b) => a.time < b.time)
  pq.push(new State(0, 0, 0, 0))

  while (!pq.isEmpty()) {
    const cur = pq.pop()

    if (cur.mask === FULL && cur.side === 1) {
      return cur.time
    }

    if (dist[cur.mask][cur.stage][cur.side] < cur.time) {
      continue
    }

    const people = []

    for (let i = 0; i < n; i++) {
      const atDest = ((cur.mask >> i) & 1) === 1

      if ((cur.side === 0 && !atDest) || (cur.side === 1 && atDest)) {
        people.push(i)
      }
    }

    const psize = people.length

    for (let bm = 1; bm < 1 << psize; bm++) {
      if (bitCount(bm) > k) {
        continue
      }

      const group = []
      let idx = 0
      let maxT = 0

      for (let j = 0; j < psize; j++) {
        if (((bm >> j) & 1) === 1) {
          group[idx++] = people[j]
          maxT = Math.max(maxT, time[people[j]])
        }
      }

      const tripTime = maxT * mul[cur.stage]
      const newStage = (cur.stage + Math.floor(tripTime)) % m
      const newTime = cur.time + tripTime
      let nextMask = cur.mask

      for (const person of group) {
        nextMask ^= 1 << person
      }

      const newSide = 1 - cur.side

      if (newTime < dist[nextMask][newStage][newSide]) {
        dist[nextMask][newStage][newSide] = newTime
        pq.push(new State(nextMask, newStage, newSide, newTime))
      }
    }
  }

  return -1
}

class State {
  constructor(mask, stage, side, time) {
    this.mask = mask
    this.stage = stage
    this.side = side
    this.time = time
  }
}

function bitCount(x) {
  let count = 0
  while (x) {
    count += x & 1
    x >>= 1
  }
  return count
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
