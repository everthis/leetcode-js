/**
 * @param {number[]} stations
 * @param {number} K
 * @return {number}
 */
const minmaxGasDist = function (stations, K) {
  const dis = []
  let min = 0
  let max = 1e8
  for (let i = 0; i < stations.length - 1; i++) {
    dis.push(stations[i + 1] - stations[i])
  }
  while (max - min > 1e-6) {
    const mid = min + (max - min) / 2
    if (possible(dis, mid, K)) {
      max = mid
    } else {
      min = mid
    }
  }
  return min
}

const possible = (dis, res, K) => {
  let need = 0
  for (let i = 0; i < dis.length; i++) {
    need += dis[i] <= res ? 0 : Math.floor(dis[i] / res)
  }
  return need <= K
}

// another

/**
 * @param {number[]} stations
 * @param {number} k
 * @return {number}
 */
const minmaxGasDist = function(stations, k) {
  const pq = new PriorityQueue((a, b) => a[0] > b[0])
  for(let i = 1, n = stations.length; i < n; i++) {
    const delta = stations[i] - stations[i - 1]
    pq.push([delta, delta, 1])
  }
  const limit = (stations[stations.length - 1] - stations[0]) / k
  // console.log(pq.heap)
  while(k>0) {
    let [delta, gap, num] = pq.pop()
    
    let v = gap / (num + 1)
    while(k > 0 && gap / (num + 1) > limit) {
      k--
      num++
    }
    
    v = gap / ++num
    k--
    
    pq.push([v, gap, num])
  }
  
  return pq.peek()[0]
};


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
