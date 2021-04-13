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
/**
 * @param {number[][]} events
 * @return {number}
 */
function maxEvents(events) {
  const pq = new PriorityQueue((a, b) => a < b)
  
  events.sort((a, b) => a[0] - b[0])
  let i = 0, res = 0, d = 0, n = events.length

  while(!pq.isEmpty() || i < n) {
    if(pq.isEmpty()) {
      d = events[i][0]
    }
    while(i < n && events[i][0] <= d) {
      pq.push(events[i++][1])
    }
    pq.pop()
    res++
    d++
    while(!pq.isEmpty() && pq.peek() < d) {
      pq.pop()
    }
  }

  return res
}


// another

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
/**
 * @param {number[][]} events
 * @return {number}
 */
function maxEvents(events) {
  const pq = new PriorityQueue((a, b) => a < b)
  events.sort((a, b) => a[0] - b[0])
  let res = 0, i = 0, n = events.length
  for(let d = 1; d <= 100000; d++) {
    while(i < n && events[i][0] === d) {
      pq.push(events[i++][1])
    }
    while(!pq.isEmpty() && pq.peek() < d) {
      pq.pop()
    }
    if(!pq.isEmpty()) {
      res++
      pq.pop()
    }
  }
  return res
}


// another



/**
 * @param {number[][]} events
 * @return {number}
 */
function maxEvents(events) {
  events.sort(([, aEnd], [, bEnd]) => aEnd - bEnd);
  const lastDay = events[events.length - 1][1];
  const segmentTree = new SegmentTree(Array.from({ length: lastDay }, (_, i) => i), Infinity, (a, b) => Math.min(a, b));
  let daysAttended = 0;

  for (const [start, end] of events) {
    // earliest attendable day
    const ead = segmentTree.queryIn(start - 1, end);
    if (ead <= end) {
      daysAttended += 1;
      segmentTree.setAt(ead, Infinity);
    }
  }

  return daysAttended;
}

// https://github.com/axross/complex-data-structures
// new SegmentTree(values, identity, associate)
//     segmentTree.getAt(i)
//     segmentTree.queryIn(from, to)
//     segmentTree.setAt(i, value)
//     segmentTree.length
class SegmentTree{constructor(t,e,s){if(this.valueLength=t.length,this.identity=e,this.associate=s,0===t.length)this.tree=[];else{const h=2**Math.ceil(Math.log2(t.length))*2-1,i=[];for(let s=0;s<=h>>1;++s)i[(h>>1)+s]=s<t.length?t[s]:e;for(let t=(h>>1)-1;t>=0;--t)i[t]=s(i[2*t+1],i[2*t+2]);this.tree=i}}get length(){return this.valueLength}getAt(t){return this.tree[t+(this.tree.length>>1)]}queryIn(t,e){let s=this.identity;const h=[[0,0,1+(this.tree.length>>1)]];for(;h.length>0;){const[i,r,n]=h.pop();r>=t&&n<=e?s=this.associate(s,this.tree[i]):r>=e||n<t||i>this.tree.length>>1||h.push([2*i+1,r,r+n>>1],[2*i+2,r+n>>1,n])}return s}setAt(t,e){const s=t+(this.tree.length>>1);this.tree[s]=e;let h=s-1>>1;for(;h>=0;)this.tree[h]=this.associate(this.tree[2*h+1],this.tree[2*h+2]),h=h-1>>1}}
