/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDifference = function(nums) {
  const n = nums.length, len = n / 3
  const maxHeap = new PriorityQueue((a, b) => a > b)
  const minHeap = new PriorityQueue((a, b) => a < b)
  const pre = Array(n).fill(Infinity), suffix = Array(n).fill(-Infinity)
  for(let i = 0, sum = 0; i < 2 * len; i++) {
    const cur = nums[i]
    maxHeap.push(cur)
    sum += cur
    if(maxHeap.size() > len) {
      const tmp = maxHeap.pop()
      sum -= tmp
    }
    if(maxHeap.size() === len) {
      pre[i] = sum
    }
  }

  for(let i = n - 1, sum = 0; i >= len; i--) {
    const cur = nums[i]
    minHeap.push(cur)
    sum += cur
    if(minHeap.size() > len) {
      const tmp = minHeap.pop()
      sum -= tmp
    }
    if(minHeap.size() === len) {
      suffix[i] = sum
    }
  }

  // console.log(pre, suffix)
  let res = Infinity
  for(let i = len - 1; i < n - len; i++) {
    res = Math.min(res, pre[i] - suffix[i + 1])
  }
  return res
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
