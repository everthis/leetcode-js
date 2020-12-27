/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
const eatenApples = function(apples, days) {

    let ans = 0, n = apples.length;
    const que = new PriorityQueue();
    for (let i = 0; i < n; i++) {
        while (!que.isEmpty() && que.peek().exp <= i) que.pop();
        if (que.isEmpty()) {
            if (apples[i] == 0 && days[i] == 0) continue;
        } 
        que.push({cnt: apples[i], exp: i + days[i]});
        ans++;
        let temp = que.peek();
        que.pop();
        if (--temp.cnt) que.push(temp);
    }
    let day = n;
    while (!que.isEmpty()) {
        while (!que.isEmpty() && que.peek().exp <= n) que.pop();
        if (que.isEmpty()) break;
        ans++;
        n++;
        let temp = que.peek();
        que.pop();
        if (--temp.cnt) que.push(temp);
    }
    return ans;
};

class PriorityQueue {
  constructor(comparator = (a, b) => a.exp < b.exp) {
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
