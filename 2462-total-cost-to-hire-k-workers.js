/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
const totalCost = function(costs, k, candidates) {
  const fn = (a, b) => a[0] === b[0] ? a[1] < b[1] : a[0] < b[0]
  const n = costs.length
  let l = 0, r = n - 1
  const first = new PriorityQueue(fn)
  const last = new PriorityQueue(fn)
  
  for(let i = 0; i < Math.min(candidates, n); i++) {
    first.push([costs[i], i])
    l = i
  }
  
  for(let i = n - 1; i > Math.max(0, candidates - 1, n - 1 - candidates); i--) {
    last.push([costs[i], i])
    r = i
  }
  
  // console.log(first, last)
  
  let res = 0
  let num = k
  while(num) {
    const ft = first.peek()
    const lt = last.peek()
    
    if(ft && lt) {
      if(ft[0] < lt[0]) {
        first.pop()
        res += ft[0]
        if(r - l > 1) {
          l++
          first.push([costs[l], l])
        }
      } else if(ft[0] > lt[0]) {
        last.pop()
        res += lt[0]
        if(r - l > 1) {
          r--
          last.push([costs[r], r])
        }
      } else {
        first.pop()
        res += ft[0]
        if(r - l > 1) {
          l++
          first.push([costs[l], l])
        } 
      }
    } else if(ft) {
      first.pop()
      res += ft[0]
    } else if(lt) {
      last.pop()
      res += lt[0]
    }
    // console.log(res)
    num--
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
