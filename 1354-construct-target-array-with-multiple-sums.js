/**
 * @param {number[]} target
 * @return {boolean}
 */
const isPossible = function (target) {
  const pq = new PriorityQueue();
  let total = 0;
  for (let a of target) {
    total += a;
    pq.push(a);
  }
  while (true) {
    let a = pq.pop();
    total -= a;
    if (a === 1 || total === 1) return true;
    if (a < total || total === 0 || a % total === 0) return false;
    a %= total;
    total += a;
    pq.push(a);
  }
};

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this.heap = [];
    this.top = 0;
    this.comparator = comparator;
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    return this.heap[this.top];
  }
  push(...values) {
    values.forEach((value) => {
      this.heap.push(value);
      this.siftUp();
    });
    return this.size();
  }
  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > this.top) {
      this.swap(this.top, bottom);
    }
    this.heap.pop();
    this.siftDown();
    return poppedValue;
  }
  replace(value) {
    const replacedValue = this.peek();
    this.heap[this.top] = value;
    this.siftDown();
    return replacedValue;
  }

  parent = (i) => ((i + 1) >>> 1) - 1;
  left = (i) => (i << 1) + 1;
  right = (i) => (i + 1) << 1;
  greater = (i, j) => this.comparator(this.heap[i], this.heap[j]);
  swap = (i, j) =>
    ([this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]);
  siftUp = () => {
    let node = this.size() - 1;
    while (node > this.top && this.greater(node, this.parent(node))) {
      this.swap(node, this.parent(node));
      node = this.parent(node);
    }
  };
  siftDown = () => {
    let node = this.top;
    while (
      (this.left(node) < this.size() && this.greater(this.left(node), node)) ||
      (this.right(node) < this.size() && this.greater(this.right(node), node))
    ) {
      let maxChild =
        this.right(node) < this.size() &&
        this.greater(this.right(node), this.left(node))
          ? this.right(node)
          : this.left(node);
      this.swap(node, maxChild);
      node = maxChild;
    }
  };
}
