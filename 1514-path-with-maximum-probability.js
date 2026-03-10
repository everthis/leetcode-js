/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    const g = {}
    for(let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i]
        if(g[a] == null) g[a] = []
        if(g[b] == null) g[b] = []
        g[a].push([b, i])
        g[b].push([a, i])
    }

    const res = Array(n).fill(0)
    res[start_node] = 1
    let q = new Dq()
    q.push(start_node)

    while(!q.isEmpty()) {
        const cur = q.shift()
        // console.log(cur)
        for(const [nxt, i] of (g[cur] || [])) {
            if(succProb[i] * res[cur] > res[nxt]) {
                res[nxt] = succProb[i] * res[cur]
                q.push(nxt)
            }
        }
    }
// console.log(g, res)

    return res[end_node]
};

class Dq {
    constructor() {
        this.dummy = new Node()
        this.tail = null
    }
    push(val) {
        const tmp = new Node(val)
        // if(this.cur == null) this.cur = tmp
        if(this.tail) {
            this.tail.next = tmp
            tmp.pre = this.tail
        } else {
            this.dummy.next = tmp
            tmp.pre = this.dummy
        }

        this.tail = tmp
    }
    pop() {
        if(this.tail == null) return
        const pre = this.tail.pre
        pre.next = null
        this.tail = pre
    }
    isEmpty() {
        return this.dummy.next == null
    }
    shift() {
        const head = this.dummy.next
        const hnxt = head.next
        this.dummy.next = hnxt
        if(hnxt) hnxt.pre = this.dummy
        else this.tail = null
        if(head) return head.val
    }
    head() {
        return this.dummy.next ? this.dummy.next.val : -1
    }
    last() {
        return this.tail ? this.tail.val : -1
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.pre = null
    }
}

// another


/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
  const g = {}
  for (let i = 0; i < edges.length; ++i) {
    const a = edges[i][0],
      b = edges[i][1]
    if (g[a] == null) g[a] = []
    if (g[b] == null) g[b] = []
    g[a].push([b, i])
    g[b].push([a, i])
  }
  const p = new Array(n).fill(-1)
  p[start] = 1
  const pq = new PQ((a, b) => p[a] > p[b])
  pq.push(start)
  while (!pq.isEmpty()) {
    const cur = pq.pop()

    for (let a of g[cur] || []) {
      const neighbor = a[0],
        index = a[1]
      if (p[cur] * succProb[index] > p[neighbor]) {
        p[neighbor] = p[cur] * succProb[index]
        pq.push(neighbor)
      }
    }
  }
  return p[end] === -1 ? 0 : p[end]
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
