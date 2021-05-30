/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
const assignTasks = function(servers, tasks) {
  let i = 0
  const freePQ = new PriorityQueue((a, b) => {
    if(a.w < b.w) return true
    else if(a.w > b.w) return false
    else {
      if(a.idx < b.idx) return true
      return false
    }
  })
  const runningPQ = new PriorityQueue((a, b) => {
    return a.end < b.end
  })
  const res = []
  for(let i = 0; i < servers.length; i++) {
    freePQ.push({
      w: servers[i],
      idx: i
    })
  }
  let taskIdx = 0
  while(taskIdx < tasks.length) {
    while(!runningPQ.isEmpty() && runningPQ.peek().end <= i) {
      let server = runningPQ.pop()
      freePQ.push({
        w: server.w,
        idx: server.idx
      })
    }
    
    while(taskIdx <= i && !freePQ.isEmpty() && taskIdx < tasks.length) {
      const server = freePQ.pop()
      res[taskIdx] = server.idx
      runningPQ.push({
        end: i + tasks[taskIdx],
        w: server.w,
        idx: server.idx
      })
      taskIdx++
    }
    if(i < tasks.length || !freePQ.isEmpty()) i++
    else i = Math.max(i + 1, runningPQ.peek().end)
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
