let isPrime
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const minOperations = function(n, m) {
  genPrimes()
//   console.log(isPrime)
  if(isPrime[n] || isPrime[m]) return -1
  const pq = new PQ((a, b) => a[0] < b[0])
  const visited = new Set()

  pq.push([n, n])
  while(!pq.isEmpty()) {
    const [steps, cur] = pq.pop()
    // console.log(cur)
    if(visited.has(cur)) continue
    visited.add(cur)
    // console.log(steps)
    if(cur === m) return steps
    const s = ('' + cur).split('')
    for(let i = 0; i < s.length; i++) {
      const tmp = s[i]
      const num = +s[i]
      if(s[i] < '9') {
        s[i] = num + 1
        const nxt = +s.join('')
        if(!isPrime[nxt] && !visited.has(nxt)) {
            pq.push([steps + nxt, nxt])
        }
        s[i] = tmp
      }
      if(s[i]  > '0' && !(i == 0 && s[i] == '1')) {
        s[i] = num - 1
        const nxt = +s.join('')
        if(!isPrime[nxt] && !visited.has(nxt)) {
            pq.push([steps + nxt, nxt])
        }
        s[i] = tmp
      }

    }

  }
  return -1

  function genPrimes() {
    if(isPrime != null) return
    isPrime = Array(1e4 + 1).fill(1)
    isPrime[0] = 0
    isPrime[1] = 0
    for(let i = 2; i <= 1e4; i++) {
        if(isPrime[i]) {
            for(let j = 2 * i; j <= 1e5; j += i) {
                isPrime[j] = 0
            } 
        }
    } 
  }
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
