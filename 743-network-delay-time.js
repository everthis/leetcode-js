/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const networkDelayTime = function (times, N, K) {
  const mins = new Array(N).fill(Infinity)
  mins[K - 1] = 0
  for (let i = 0; i < N; i++) {
    for (let [u, v, t] of times) {
      if (mins[u - 1] === Infinity) continue
      if (mins[v - 1] > mins[u - 1] + t) {
        mins[v - 1] = mins[u - 1] + t
      }
    }
  }
  return mins.includes(Infinity) ? -1 : Math.max(...mins)
}

// another

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const networkDelayTime = function(times, N, K) {
    const distances = new Array(N).fill(Infinity);
    distances[K - 1] = 0;
    
    for(let i = 0 ; i < N -1 ; i++){
        let counter = 0;
        for(let j = 0 ; j < times.length ; j++){
            const source = times[j][0];
            const target = times[j][1];
            const weight = times[j][2];
            if(distances[source - 1] + weight < distances[target - 1]){
                distances[target - 1] = distances[source - 1] + weight;
                counter++
            }
        }
        if(counter === 0) break
    }
    
    const res = Math.max(...distances);
    return res === Infinity ? -1 : res;
};

// another

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const networkDelayTime = function (times, N, K) {
  const hash = {}
  for(const [u, v, t] of times) {
    if(hash[u] == null) hash[u] = {}
    hash[u][v] = t
  }
  const pq = new PriorityQueue((a, b) => a[0] < b[0])
  pq.push([0, K])
  const visited = Array.from(N + 1)
  let res = 0
  while(!pq.isEmpty()) {
    const [dist, cur] = pq.pop()
    if(visited[cur]) continue
    visited[cur] = true
    res = dist
    N--
    if(hash[cur]) {
      for(let next of Object.keys(hash[cur])) {
        pq.push([dist + hash[cur][next], next])
      }
    }
  }
  return N === 0 ? res : -1
}

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
