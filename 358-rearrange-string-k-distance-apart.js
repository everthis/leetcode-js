/**

Given a non-empty string s and an integer k,
rearrange the string such that the same characters are at least distance k from each other.

All input strings are given in lowercase letters.
If it is not possible to rearrange the string, return an empty string "".

Example 1:

Input: s = "aabbcc", k = 3
Output: "abcabc" 
Explanation: The same letters are at least distance 3 from each other.
Example 2:

Input: s = "aaabc", k = 3
Output: "" 
Explanation: It is not possible to rearrange the string.
Example 3:

Input: s = "aaadbbcc", k = 2
Output: "abacabcd"
Explanation: The same letters are at least distance 2 from each other.

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const rearrangeString = function(s, k) {
  if(k > 26) return ''
  const length = s.length
  const count = new Array(26).fill(0)
  const valid = new Array(26).fill(0)
  const a = 'a'.charCodeAt(0)
  for (let i = 0; i < length; i++) {
    count[s.charCodeAt(i) - a]++
  }
  let sb = ''
  for (let index = 0; index < length; index++) {
    let candidatePos = findValidMax(count, valid, index)
    if (candidatePos == -1) return ''
    count[candidatePos]--
    valid[candidatePos] = index + k
    sb += String.fromCharCode(a + candidatePos)
  }
  return sb
}

function findValidMax(count, valid, index) {
  let max = Number.MIN_VALUE
  let candidatePos = -1
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0 && count[i] > max && index >= valid[i]) {
      max = count[i]
      candidatePos = i
    }
  }
  return candidatePos
}

// another

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const rearrangeString = function(s, k) {
  const freq = Array(26).fill(0)
  const a = 'a'.charCodeAt(0)
  for(const e of s) {
    freq[e.charCodeAt(0) - a]++
  }
  const pq = new PriorityQueue((a, b) => a[1] > b[1])
  for(let i = 0; i < 26; i++) {
    if(freq[i]) pq.push([i, freq[i]])
  }
  let res = ''
  
  // console.log(pq)
  const q = []
  while(!pq.isEmpty()) {
    const cur = pq.pop()
    cur[1]--
    res += String.fromCharCode(a + cur[0])
    q.push(cur)
    if(q.length >= k) {
      const p = q.shift()
      if(p[1] > 0) pq.push(p)
    }
  }
  // console.log(res)
  return res.length === s.length ? res : ''
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


