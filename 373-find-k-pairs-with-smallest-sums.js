/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
const kSmallestPairs = function (nums1, nums2, k) {
  const pq = new PriorityQueue((a, b) => a[0] + a[1] < b[0] + b[1])
  for(let i = 0; i < nums1.length && i < k; i++) {
    pq.push([nums1[i], nums2[0], 0])
  }
  const res = []
  while(k > 0 && !pq.isEmpty()) {
    const [e1, e2, e2i] = pq.pop()
    res.push([e1, e2])
    if(e2i + 1 < nums2.length) pq.push([e1, nums2[e2i + 1], e2i + 1])
    k--
  }
  
  return res
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


// another

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
const kSmallestPairs = function(nums1, nums2, k) {
  let len1 = nums1.length,
    len2 = nums2.length
  let arr = Array(len1).fill(0),
    resList = []
  while (k-- > 0) {
    let min = Infinity,
      index = -1,
      lastj = Infinity
    for (let i = 0; i < len1; i++) {
      const j = arr[i]
      if (j < lastj && j < len2) {
        const sum = nums1[i] + nums2[j]
        if (sum < min) {
          min = sum
          index = i
        }
        lastj = j
      }
    }
    if (index == -1) {
      break
    }
    resList.push([nums1[index], nums2[arr[index]]])
    arr[index]++
  }
  return resList
}
