/**
 * @param {number[][]} courses
 * @return {number}
 */
const scheduleCourse = function (courses) {
  const compare = (a, b) => a[0] === b[0] ? 0 : (a[0] > b[0] ? -1 : 1)
  const queue = new PriorityQueue({ compare })
  courses.sort((a, b) => a[1] - b[1])
  let time = 0
  for(let e of courses) {
    time += e[0]
    queue.enqueue(e)
    if(time > e[1]) {
      const tmp = queue.dequeue()
      time -= tmp[0]
    }
  }
  return queue.size()
}

// another

/**
 * @param {number[][]} courses
 * @return {number}
 */
const scheduleCourse = function(courses) {
  const pq = new PQ((a, b) => a[0] === b[0] ? a[1] < b[1] : a[0] > b[0])
  const n = courses.length
  courses.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1])
  
  let time = 0
  for(const e of courses) {
    const [dur, end] = e
    time += dur
    pq.push(e)
    if(time > end) {
      const tmp = pq.pop()
      time -= tmp[0]
    }
  }
  
  return pq.size()
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

// another


/**
 * @param {number[][]} courses
 * @return {number}
 */
const scheduleCourse = function (courses) {
  const queue = new MaxPriorityQueue({
    priority: e => e[0]
  })
  courses.sort((a, b) => a[1] - b[1])
  let time = 0
  for(let e of courses) {
    time += e[0]
    queue.enqueue(e)
    if(time > e[1]) {
      const tmp = queue.dequeue().element
      time -= tmp[0]
    }
  }
  return queue.size()
}

// another

/**
 * @param {number[][]} courses
 * @return {number}
 */
const scheduleCourse = function (courses) {
  courses.sort((c1, c2) => c1[1] - c2[1])
  let count = 0
  let time = 0
  const queue = []
  const inQueue = (val) => {
    let i = 0
    while (i < queue.length && queue[i] > val) i += 1
    queue.splice(i, 0, val)
  }
  for (let i = 0; i < courses.length; i += 1) {
    const [dur, end] = courses[i]
    if (time <= end - dur) {
      count += 1
      time += dur
      inQueue(dur)
    } else if (queue.length && queue[0] > dur) {
      time = time - queue.shift() + dur
      inQueue(dur)
    }
  }
  return count
}

// another

/**
 * @param {number[][]} courses
 * @return {number}
 */
const scheduleCourse = function (courses) {
  courses.sort((a, b) => +a[1] - +b[1])
  let queue = new Heap()
  let time = 0
  for (let c of courses) {
    if (c[0] + time <= c[1]) {
      time += c[0]
      queue.push(c[0])
    } else if (queue.size() > 0) {
      let top = queue.peek()
      if (top > c[0]) {
        queue.pop()
        queue.push(c[0])
        time += c[0] - top
      }
    }
  }
  return queue.size()
}

const parent = (i) => Math.floor((i - 1) / 2)
const left = (i) => 2 * i + 1
const right = (i) => 2 * i + 2
class Heap {
  constructor() {
    this.compare = (a, b) => +b - +a
    this._heap = []
  }
  size() {
    return this._heap.length
  }
  _upper(i, j) {
    return this.compare(this._heap[i], this._heap[j]) < 0
  }
  _swap(i, j) {
    let tmp = this._heap[i]
    this._heap[i] = this._heap[j]
    this._heap[j] = tmp
  }
  push(item) {
    this._heap.push(item)
    this._siftUp()
    return this.size()
  }
  _siftUp() {
    let node = this._heap.length - 1
    while (node > 0 && this._upper(node, parent(node))) {
      this._swap(node, parent(node))
      node = parent(node)
    }
  }
  peek() {
    return this._heap[0]
  }
  pop() {
    let ret = this._heap[0]
    if (this.size() > 1) {
      this._swap(0, this._heap.length - 1)
    }
    this._heap.pop()
    this._siftDown()
    return ret
  }
  _siftDown() {
    let node = 0
    while (
      (right(node) < this.size() && this._upper(right(node), node)) ||
      (left(node) < this.size() && this._upper(left(node), node))
    ) {
      let upperChild =
        right(node) < this.size() && this._upper(right(node), left(node))
          ? right(node)
          : left(node)
      this._swap(upperChild, node)
      node = upperChild
    }
  }
}

