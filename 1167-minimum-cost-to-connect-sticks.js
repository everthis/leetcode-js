/**

You have some sticks with positive integer lengths.

You can connect any two sticks of lengths X and Y into
one stick by paying a cost of X + Y.  You perform this action until there is one stick remaining.

Return the minimum cost of connecting all the given sticks into one stick in this way.

Example 1:

Input: sticks = [2,4,3]
Output: 14
Example 2:

Input: sticks = [1,8,3,5]
Output: 30
 
Constraints:

1 <= sticks.length <= 10^4
1 <= sticks[i] <= 10^4

*/

/**
 * @param {number[]} sticks
 * @return {number}
 */
const connectSticks = function(sticks) {
  if (sticks.length < 1) return 0
  let size = sticks.length - 1
  let i = Math.floor(sticks.length / 2)
  for (; i >= 0; i--) {
    heapify(sticks, i, size)
  }
  let cost = 0
  while (size >= 1) {
    const temp = sticks[0]
    sticks[0] = sticks[size--]
    heapify(sticks, 0, size)
    sticks[0] = sticks[0] + temp
    cost += sticks[0]
    heapify(sticks, 0, size)
  }
  return cost
}
const heapify = (arr, index, size) => {
  let smallest = index
  let l = index * 2 + 1
  let r = index * 2 + 2
  if (l <= size && arr[l] < arr[smallest]) {
    smallest = l
  }
  if (r <= size && arr[r] < arr[smallest]) {
    smallest = r
  }
  if (smallest != index) {
    swap(arr, index, smallest)
    heapify(arr, smallest, size)
  }
}
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// another

/**
 * @param {number[]} sticks
 * @return {number}
 */
const connectSticks = function(sticks) {
  if (sticks.length === 1) return 0
  sticks.sort((a, b) => a - b)
  let sum = [],
    result = 0
  while (sticks.length || sum.length > 1) {
    let cur = 0
    for (let i = 0; i < 2; i++) {
      if (sticks[0] && (sum[0] === undefined || sticks[0] < sum[0])) {
        cur += sticks[0]
        sticks.shift()
      } else {
        cur += sum[0]
        sum.shift()
      }
    }
    sum.push(cur)
    result += cur
  }
  return result
}

// another

/**
 * @param {number[]} sticks
 * @return {number}
 */
const connectSticks = function(sticks) {
  sticks.sort((a, b) => a - b)
  const sums = []
  let result = 0
  if (sticks.length < 2) return result
  const getMin = () => {
    const stick = sticks.length ? sticks[0] : Infinity
    const sum = sums.length ? sums[0] : Infinity
    if (sum < stick) {
      return sums.shift()
    } else {
      return sticks.shift()
    }
  }
  while (sticks.length || sums.length > 1) {
    const tmp1 = getMin()
    const tmp2 = getMin()
    const curr = tmp1 + tmp2
    result += curr
    sums.push(curr)
  }
  return result
}

// another

/**
 * @param {number[]} sticks
 * @return {number}
 */
const connectSticks = function(sticks) {
  const pq = new PriorityQueue((a, b) => a < b)
  for(let e of sticks) pq.push(e)
  let res = 0
  while(pq.size() > 1) {
    const e1 = pq.pop()
    const e2 = pq.pop()
    pq.push(e1 + e2)
    res += e1 + e2
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
