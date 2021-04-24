/**
 * initialize your data structure here.
 */
const MedianFinder = function() {
  this.arr = [];
};
/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  const bs = n => {
    let start = 0;
    let end = this.arr.length;
    while (start < end) {
      let mid = ~~((start + end) / 2);
      if (n > this.arr[mid]) start = mid + 1;
      else end = mid;
    }
    this.arr.splice(start, 0, n);
  };
  if (this.arr.length === 0) this.arr.push(num);
  else bs(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const mid = ~~(this.arr.length / 2);
  return this.arr.length % 2 === 0
    ? (this.arr[mid - 1] + this.arr[mid]) / 2
    : this.arr[mid];
};
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// another

/**
 * initialize your data structure here.
 */
const MedianFinder = function() {
  this.minPQ = new PriorityQueue()
  this.maxPQ = new PriorityQueue((a, b) => a < b)
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.minPQ.push(num)
  this.maxPQ.push(this.minPQ.pop())
  if(this.minPQ.size() < this.maxPQ.size()) {
    this.minPQ.push(this.maxPQ.pop())
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if(this.minPQ.size() > this.maxPQ.size()) return this.minPQ.peek()
  else return (this.minPQ.peek() + this.maxPQ.peek()) / 2
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
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
