
/**
 * @param {number[][]} events
 * @return {number}
 */
const maxTwoEvents = function(events) {
  const n = events.length
  events.sort((a, b) => a[0] - b[0])
  const dp = Array.from({ length: n }, () => Array(3).fill(-1))

  return dfs(0, 0)

  function dfs(idx, cnt) {
    if(cnt === 2 || idx >= n) return 0
    if(dp[idx][cnt] === -1) {
      let end = events[idx][1]
      let lo = idx + 1, hi = n - 1;
      while (lo < hi) {
        const mid = lo + ((hi - lo) >> 1);
        if (events[mid][0] <= end) lo = mid + 1
        else hi = mid;
      }
      const include = events[idx][2] + (lo < n && events[lo][0] > end ? dfs(lo, cnt + 1) : 0);
      const exclude = dfs(idx + 1, cnt);
      dp[idx][cnt] = Math.max(include, exclude);
    }

    return dp[idx][cnt]
  }
};

// another

/**
 * @param {number[][]} events
 * @return {number}
 */
const maxTwoEvents = function(events) {
  const n = events.length, { max } = Math
  let res = 0, maxVal = 0;
  const pq = new PriorityQueue((a, b) => a[0] < b[0]);
  events.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  for (let e of events) {
    for(; !pq.isEmpty() && pq.peek()[0] < e[0]; pq.pop())
      maxVal = max(maxVal, pq.peek()[1]);
    res = max(res, maxVal + e[2]);
    pq.push([e[1], e[2]]);
  }
  return res;
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
