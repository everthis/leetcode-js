/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
const getOrder = function(tasks) {
  const pq = new PriorityQueue(compare), n = tasks.length
  const res = []
  let time = 0, i = 0
  for(let i = 0; i < n; i++) tasks[i].push(i)
  tasks.sort((a, b) => a[0] - b[0])
  
  time = tasks[0][0]
  while(i < n || !pq.isEmpty()) {
    while ((i < n) && (tasks[i][0] <= time)) {
      pq.push([tasks[i][1], tasks[i][2]])
      i++
    }
    if(!pq.isEmpty()) {
      const [dur, idx] = pq.pop()
      time += dur
      res.push(idx)
    } else if(i < n) {
      time = tasks[i][0]
    }

  }

  return res
};

function compare(a, b) {
  if(a[0] < b[0]) return true
  else if (a[0] > b[0]) return false
  else {
    return a[1] < b[1]
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


// another

/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
const getOrder = function(tasks) {
  const pq = new PriorityQueue(compare), n = tasks.length
  const res = []
  let time = 0, i = 0
  for(let i = 0; i < n; i++) tasks[i].push(i)
  tasks.sort((a, b) => a[0] - b[0])
  
  while(i < n || !pq.isEmpty()) {
    if(pq.isEmpty()) {
      time = Math.max(time, tasks[i][0])
    }
    while(i < n && time >= tasks[i][0]) {
      pq.push([tasks[i][1], tasks[i][2]])
      i++
    }
    const [dur, idx] = pq.pop()
    time += dur
    res.push(idx)
  }

  return res
};

function compare(a, b) {
  if(a[0] < b[0]) return true
  else if (a[0] > b[0]) return false
  else {
    return a[1] < b[1]
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

// another
/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
const getOrder = function(tasks) {
  const n = tasks.length
  const pq = new PriorityQueue((a, b) => a[0] === b[0] ? a[1] < b[1] : a[0] < b[0])
  tasks.forEach((e, i) => e.push(i))
  tasks.sort((a, b) => a[0] - b[0])
  let idx = 0, time = 0
  const res = []

  while(idx < n || !pq.isEmpty()) {
    while(idx < n && tasks[idx][0] <= time) {
      pq.push([tasks[idx][1], task[idx][2]])
      idx++
    }
    if(!pq.isEmpty()) {
      const tmp = pq.pop()
      time += tmp[0]
      res.push(tmp[1])
    } else if(idx < n) {
      time = tasks[idx][0]
    }
  }
  return res

};
