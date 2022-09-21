/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kSum = function(nums, k) {
    let sum = 0, n = nums.length, pq = new MaxPriorityQueue({ compare: (x, y) => y[0] - x[0] });
    for (let i = 0; i < n; i++) {
        if (nums[i] < 0) {
            nums[i] *= -1;
        } else {
            sum += nums[i];
        }
    }
    if (k == 1) return sum;
    nums.sort((x, y) => x - y);
    pq.enqueue([sum - nums[0], 0]);
    for (let i = 2; i < k; i++) {
        let [x, idx] = pq.dequeue();
        if (idx + 1 < n) {
            pq.enqueue([x + nums[idx] - nums[idx + 1], idx + 1]);
            pq.enqueue([x - nums[idx + 1], idx + 1]);
        }
    }
    return pq.front()[0];
};

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const kSum = function (nums, k) {
  let sum = 0,
    n = nums.length,
    pq = new PriorityQueue((x, y) => y[0] < x[0])
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      nums[i] *= -1
    } else {
      sum += nums[i]
    }
  }
  if (k == 1) return sum
  nums.sort((x, y) => x - y)
  pq.push([sum - nums[0], 0])
  for (let i = 2; i < k; i++) {
    let [x, idx] = pq.pop()
    if (idx + 1 < n) {
      pq.push([x + nums[idx] - nums[idx + 1], idx + 1])
      pq.push([x - nums[idx + 1], idx + 1])
    }
  }
  return pq.peek()[0]
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
