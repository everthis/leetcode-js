/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
const maxAverageRatio = function (classes, extraStudents) {
  const pq = new PriorityQueue((a, b) => a.delta > b.delta)
  const n = classes.length
  for (let e of classes) {
    pq.push({
      pass: e[0],
      total: e[1],
      ratio: e[0] / e[1],
      delta: (e[0] + 1) / (e[1] + 1) - e[0] / e[1],
    })
  }

  while (extraStudents) {
    const tmp = pq.pop()
    tmp.pass++
    tmp.total++
    tmp.ratio = tmp.pass / tmp.total
    tmp.delta = (tmp.pass + 1) / (tmp.total + 1) - tmp.ratio
    pq.push(tmp)
    extraStudents--
  }

  let res = 0
  while (!pq.isEmpty()) {
    const tmp = pq.pop()
    res += tmp.ratio
  }

  return res / n
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
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
const maxAverageRatio = function(classes, extraStudents) {
  const pq = new PriorityQueue((a, b) => a.up > b.up);
  for (let x of classes) pq.push(new Node(x[0], x[1]));
  while (extraStudents--) {
    let temp = pq.peek();
    pq.pop();
    temp.pass++, temp.total++;
    temp.calUp();
    pq.push(temp);
  }
    let total = 0.0;
    let n = classes.length;
    while (!pq.isEmpty()) {
        let temp = pq.peek();
        pq.pop();
        total += temp.pass / temp.total;
    }
    return total / n;
};

class Node {
  constructor(pass, total) {
    this.pass = pass
    this.total = total
    this.calUp()
  }
  calUp() {
    this.up = (this.pass + 1) / (this.total + 1) - this.pass / this.total
  }
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
