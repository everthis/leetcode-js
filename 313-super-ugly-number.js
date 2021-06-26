/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
const nthSuperUglyNumber = function(n, primes) {
  if (n === 1) return 1
  const indexes = new Array(primes.length).fill(0)
  const arr = [1]
  for (let i = 1; i <= n - 1; i++) {
    arr[i] = +Infinity
    for (let j = 0; j < primes.length; j++) {
      arr[i] = Math.min(arr[i], arr[indexes[j]] * primes[j])
    }
    for (let j = 0; j < primes.length; j++) {
      if (arr[i] === arr[indexes[j]] * primes[j]) {
        indexes[j]++
      }
    }
  }
  return arr[n - 1]
}

// another

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
const nthSuperUglyNumber = function(n, primes) {
  const ugly = Array(n).fill(0)
  const pq = new PriorityQueue((a, b) => a[0] < b[0])
  
  for(let i = 0; i < primes.length; i++) pq.push([primes[i], 1, primes[i]])
  ugly[0] = 1
  for(let i = 1; i < n; i++) {
    ugly[i] = pq.peek()[0]
    while(pq.peek()[0] === ugly[i]) {
      const next = pq.pop()
      pq.push([next[2] * ugly[next[1]], next[1] + 1, next[2]])
    }
  }
  
  return ugly[n - 1]
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
