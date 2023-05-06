/**
 * @param {number[][]} orders
 * @return {number}
 */
const getNumberOfBacklogOrders = function(orders) {
  const buyPQ = new PQ((a, b) => a[0] > b[0])
  const sellPQ = new PQ((a, b) => a[0] < b[0])
  const mod = 1e9 + 7
  
  for(const e of orders) {
    const [p, a, o] = e
    if(o === 0) {
      // buy order
      if(sellPQ.isEmpty() || sellPQ.peek()[0] > p) {
        buyPQ.push(e)
        continue
      }
      while(!sellPQ.isEmpty() && sellPQ.peek()[0] <= p && e[1]) {
        const tmp = sellPQ.peek()
        if(e[1] <= tmp[1]) {
          tmp[1] -= e[1]
          e[1] = 0
          if(tmp[1] === 0) {
            sellPQ.pop()
          }
        } else {
          // e[1] > tmp[1]
          sellPQ.pop()
          e[1] -= tmp[1]
        }
      }
      if(e[1]) {
        buyPQ.push(e)
      }
    } else if(o === 1) {
      // sell order
      if(buyPQ.isEmpty() || buyPQ.peek()[0] < p) {
        sellPQ.push(e)
        continue
      }
      while(!buyPQ.isEmpty() && buyPQ.peek()[0] >= p && e[1]) {
        const tmp = buyPQ.peek()
        if(e[1] <= tmp[1]) {
          tmp[1] -= e[1]
          e[1] = 0
          if(tmp[1] === 0) {
            buyPQ.pop()
          }
        } else {
          // e[1] > tmp[1]
          buyPQ.pop()
          e[1] -= tmp[1]
        }
      }
      if(e[1]) {
        sellPQ.push(e)
      }
    }
  }
  
  let res = 0
  
  while(!buyPQ.isEmpty()) {
    res = (res + buyPQ.pop()[1]) % mod
  }
  while(!sellPQ.isEmpty()) {
    res = (res + sellPQ.pop()[1]) % mod
  }
  
  return res % mod
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
