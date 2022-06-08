const maxComp = (a, b) => {
  return a[1] === b[1] ? b[0].localeCompare(a[0]) > 0 : a[1] > b[1]
}

const minComp = (a, b) => {
  return a[1] === b[1] ? a[0].localeCompare(b[0]) > 0: a[1] < b[1]
}

const SORTracker = function() {
  // max
  this.pq = new PriorityQueue(maxComp)
  // min
  this.best = new PriorityQueue(minComp)
};

/** 
 * @param {string} name 
 * @param {number} score
 * @return {void}
 */
SORTracker.prototype.add = function(name, score) {
  this.pq.push([name, score])
  while(!this.best.isEmpty() && maxComp(this.pq.peek(), this.best.peek())) {
    const a = this.best.pop(), b = this.pq.pop()
    this.best.push(b)
    this.pq.push(a)
  }
};

/**
 * @return {string}
 */
SORTracker.prototype.get = function() {
  const tmp = this.pq.pop()
  this.best.push(tmp)
  return tmp[0]
};

/** 
 * Your SORTracker object will be instantiated and called as such:
 * var obj = new SORTracker()
 * obj.add(name,score)
 * var param_2 = obj.get()
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
