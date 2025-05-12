/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function(nums, queries) {
    queries.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    const candidate = new PQ((a, b) => a > b);
    const chosen = new PQ((a, b) => a < b);
    let res = 0;
    const n = nums.length;
    let j = 0;

    for (let i = 0; i < n; i++) {
        while (j < queries.length && queries[j][0] === i) {
            candidate.push(queries[j][1]);
            j++;
        }
        nums[i] -= chosen.size();
        while (nums[i] > 0 && candidate.size() > 0 && candidate.peek() >= i) {
            res++;
            chosen.push(candidate.peek());
            candidate.pop()
            nums[i]--;
        }
        if (nums[i] > 0) return -1;
        while (chosen.size() > 0 && chosen.peek() === i) {
            chosen.pop()
        }
    }
    return queries.length - res;
};
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
