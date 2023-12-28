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
 * @param {number[]} start
 * @param {number[]} target
 * @param {number[][]} specialRoads
 * @return {number}
 */
const minimumCost = function(start, target, specialRoads) {
  const n = specialRoads.length, INF = Number.MAX_SAFE_INTEGER

  const {abs, min, max} = Math
  const dis = Array(n).fill(INF)
  const pq = new PQ((a,b) => a[0] < b[0])
  
  let res = abs(start[0] - target[0]) + abs(start[1] - target[1])  
  for(let i = 0; i < n; i++) {
    const e = specialRoads[i]
    const tmp = abs(e[0] - start[0]) + abs(e[1] - start[1]) + e[4]
    dis[i] = tmp
    pq.push([tmp, i])
  }

  while(!pq.isEmpty()) {
    const [d, i] = pq.pop()
    if(d > dis[i]) continue
    res = min(res, d + abs(target[0] - specialRoads[i][2]) + abs(target[1] - specialRoads[i][3]))

    for(let nxt = 0; nxt < n; nxt++) {
      const nv = abs(specialRoads[nxt][0] - specialRoads[i][2]) + abs(specialRoads[nxt][1] - specialRoads[i][3]) + specialRoads[nxt][4]
      if(d + nv < dis[nxt]) {
        dis[nxt] = d + nv
        pq.push([dis[nxt], nxt])
      }
    }
  }

  return res
};


// another


/**
 * @param {number[]} start
 * @param {number[]} target
 * @param {number[][]} specialRoads
 * @return {number}
 */
var minimumCost = function (start, target, specialRoads) {
  const INF = 1e9 + 10
  let n = specialRoads.length
  const { abs, min, max } = Math

  // Initialize the distance of each special road to infinity
  const d = Array(n).fill(INF)

  // Create a priority queue and push the distance from start to each special road
  const pq = new PQ((a, b) => a[0] < b[0])
  for (let i = 0; i < n; i++) {
    d[i] =
      abs(start[0] - specialRoads[i][0]) +
      abs(start[1] - specialRoads[i][1]) +
      specialRoads[i][4]
    pq.push([d[i], i])
  }

  // Initialize the answer with the manhattan distance between start and target
  let ans = abs(start[0] - target[0]) + abs(start[1] - target[1])

  // Continue to search for the shortest path until the priority queue is empty
  while (pq.size()) {
    // Pop the pair with smallest distance
    let [d_c, c] = pq.pop()

    // If the distance stored in d is not equal to the current distance d_c, skip this node
    if (d_c != d[c]) continue

    // Update the answer by finding the distance from the current special road to the target
    ans = min(
      ans,
      d_c +
        abs(target[0] - specialRoads[c][2]) +
        abs(target[1] - specialRoads[c][3])
    )

    // For each special road that can be reached from the current special road, update its distance
    for (let nxt = 0; nxt < n; nxt++) {
      let w =
        abs(specialRoads[c][2] - specialRoads[nxt][0]) +
        abs(specialRoads[c][3] - specialRoads[nxt][1]) +
        specialRoads[nxt][4]
      if (d_c + w < d[nxt]) {
        d[nxt] = d_c + w
        pq.push([d[nxt], nxt])
      }
    }
  }

  // Return the minimum cost of reaching the target
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
