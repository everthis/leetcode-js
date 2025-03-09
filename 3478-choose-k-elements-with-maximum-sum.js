/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var findMaxSum = function (nums1, nums2, k) {
    const n = nums1.length;
    const answer = new Array(n).fill(0);

    const pairs = new Array(n);
    for (let i = 0; i < n; i++) {
        pairs[i] = new Pair(nums1[i], nums2[i], i);
    }

    pairs.sort((a, b) => a.num1 - b.num1);

    const minHeap = new PQ((a, b) => a < b);
    let currentSum = 0;

    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && pairs[j].num1 === pairs[i].num1) {
            answer[pairs[j].index] = currentSum;
            j++;
        }
        for (let t = i; t < j; t++) {
            const value = pairs[t].num2;
            if (minHeap.size() < k) {
                minHeap.push(value);
                currentSum += value;
            } else if (!minHeap.isEmpty() && value > minHeap.peek()) {
                currentSum -= minHeap.peek();
                minHeap.pop();
                minHeap.push(value);
                currentSum += value;
            }
        }
        i = j;
    }

    return answer;
}
class Pair {
    constructor(num1, num2, index) {
        this.num1 = num1;
        this.num2 = num2;
        this.index = index;
    }
}

class PQ {
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

