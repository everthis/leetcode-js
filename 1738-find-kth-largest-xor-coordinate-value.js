/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function(matrix, k) {
    let m = matrix.length;
    let n = matrix[0].length;
    const v = [], d = Array(n).fill(0);
    d[0] = matrix[0][0];
    v.push(d[0]);
    for (let i = 1; i < n; ++i) {
      d[i] = matrix[0][i] ^ d[i - 1];
      v.push(d[i]);
    }
    for (let i = 1; i < m; ++i) {
      let cur = matrix[i][0];
      d[0] ^= cur;
      v.push(d[0]);
      for (let j = 1; j < n; ++j) {
        cur ^= matrix[i][j];
        d[j] ^= cur;
        v.push(d[j]);
      }
    }
    v.sort((a, b) => b - a)
    return v[k - 1];
};

// another

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthLargestValue = function(matrix, k) {
    const tmp = []
    const n = matrix.length, m = matrix[0].length
    const dp = Array.from({ length: n }, () => Array(m).fill(0))
    dp[0][0] = matrix[0][0]
    tmp.push(dp[0][0])
    for(let j = 1; j < m; j++) {
      dp[0][j] = dp[0][j - 1] ^ matrix[0][j]
      tmp.push(dp[0][j])
    }
    for(let i = 1; i < n; i++) {
      dp[i][0] = dp[i - 1][0] ^ matrix[i][0]
      tmp.push(dp[i][0])
    }
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            dp[i][j] = dp[i][j - 1] ^ dp[i - 1][j] ^ matrix[i][j] ^ dp[i - 1][j - 1]
            tmp.push(dp[i][j])
        }
    }
    tmp.sort((a, b) => b - a)
    return tmp[k - 1]
};


// another

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthLargestValue = function(matrix, k) {
  if(matrix == null || matrix[0] == null) return 0
  const m = matrix.length, n = matrix[0].length
  const res = Array.from({ length: m }, () => Array(n).fill(0))
  res[0][0] = matrix[0][0]
  for(let i = 1; i < m; i++) {
    res[i][0] = res[i - 1][0] ^ matrix[i][0]
  }
  for(let j = 1; j < n; j++) {
    res[0][j] = res[0][j - 1] ^ matrix[0][j]
  }
  
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      res[i][j] = res[i][j - 1] ^ res[i - 1][j] ^ res[i - 1][j - 1] ^ matrix[i][j]
    }
  }
  
  const pq = new PriorityQueue((a, b) => a < b)
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      pq.push(res[i][j])
      if(pq.size() > k) pq.pop()
    }
  }
  
  return pq.pop()
  
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
