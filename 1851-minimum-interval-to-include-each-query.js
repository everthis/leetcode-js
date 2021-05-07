/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
const minInterval = function (intervals, queries) {
  const n = intervals.length
  const m = queries.length
  const sortedQueryIdx = [...Array(m).keys()].sort(
    (a, b) => queries[a] - queries[b]
  )
  intervals.sort((a, b) => a[0] - b[0]) // sort by start & ascending
  const minHeap = new BinaryHeap((c, p) => c.size >= p.size)
  const res = Array(m).fill(0)
  let i = 0
  for (const idx of sortedQueryIdx) {
    const query = queries[idx]
    while (i < n && intervals[i][0] <= query) {
      minHeap.push({
        size: intervals[i][1] - intervals[i][0] + 1,
        start: intervals[i][0],
        end: intervals[i][1],
      })
      i++
    }
    while (!minHeap.isEmpty() && minHeap.peek().end < query) {
      minHeap.pop()
    }
    res[idx] = minHeap.isEmpty() ? -1 : minHeap.peek().size
  }
  return res
}

class BinaryHeap {
  /**
   * @param {compareFunction} compareFn
   */
  constructor(compareFn) {
    this.content = []
    this.compareFn = compareFn // Min-Heap: (c, p) => c > p
  }

  /**
   * @return {number} - Current heap size.
   */
  size() {
    return this.content.length
  }

  /**
   * @return {boolean} - True if heap size is empty.
   */
  isEmpty() {
    return this.size() === 0
  }

  /**
   * @return {*} - Root node of the heap.
   */
  peek() {
    return this.size() > 0 ? this.content[0] : null
  }

  /**
   * @param {*} node - New node to add.
   */
  push(node) {
    this.content.push(node)
    this._bubbleUp(this.content.length - 1)
  }

  /**
   * @return {*} - Root node of the heap.
   */
  pop() {
    if (this.content.length === 0) return null
    const root = this.content[0]
    const last = this.content.pop()
    if (this.content.length > 0) {
      this.content[0] = last
      this._sinkDown(0)
    }
    return root
  }

  /**
   * @param {*} node - Node to delete.
   */
  remove(node) {
    const length = this.content.length
    for (let i = 0; i < length; i++) {
      if (this.content[i] !== node) continue
      const last = this.content.pop()
      if (i === length - 1) break
      this.content[i] = last
      this._bubbleUp(i)
      this._sinkDown(i)
      break
    }
  }

  /**
   * @param {number} idx - Index of the node to bubble up
   */
  _bubbleUp(idx) {
    const node = this.content[idx]
    while (idx > 0) {
      const parentIdx = Math.floor((idx + 1) / 2) - 1
      const parent = this.content[parentIdx]
      if (this.compareFn(node, parent)) break
      this.content[parentIdx] = node
      this.content[idx] = parent
      idx = parentIdx
    }
  }

  /**
   * @param {number} idx - Index of the node to sink down
   */
  _sinkDown(idx) {
    const node = this.content[idx]
    while (true) {
      const child2Idx = (idx + 1) * 2
      const child1Idx = child2Idx - 1
      let swapIdx = -1
      if (child1Idx < this.content.length) {
        const child1 = this.content[child1Idx]
        if (!this.compareFn(child1, node)) swapIdx = child1Idx
      }
      if (child2Idx < this.content.length) {
        const child2 = this.content[child2Idx]
        const compareNode = swapIdx === -1 ? node : this.content[child1Idx]
        if (!this.compareFn(child2, compareNode)) swapIdx = child2Idx
      }
      if (swapIdx === -1) break
      this.content[idx] = this.content[swapIdx]
      this.content[swapIdx] = node
      idx = swapIdx
    }
  }
}


// another

/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
const minInterval = function (A, Q) {
  const QQ = []
  for (let idx = 0; idx < Q.length; idx++) QQ.push([Q[idx], idx])
  QQ.sort((a, b) => a[0] - b[0])
  A.sort((a, b) => a[0] - b[0])
  let i = 0,
    N = A.length
  const ans = Array(Q.length).fill(-1)
  const m = new TreeMap()
  const pq = new PriorityQueue((a, b) => a[0] < b[0])
  for (let [q, index] of QQ) {
    for (; i < N && A[i][0] <= q; i++) {
      let len = A[i][1] - A[i][0] + 1
      if (m.get(len) == null) m.set(len, 0)
      m.set(len, m.get(len) + 1)
      pq.push([A[i][1], len])
    }
    while (pq.size() > 0 && pq.peek()[0] < q) {
      let [right, len] = pq.peek()
      m.set(len, m.get(len) - 1)
      if (m.get(len) === 0) m.remove(len)
      pq.pop()
    }
    const first = m.getMinKey()
    if (m.getLength()) ans[index] = first
  }
  return ans
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

function TreeMap() {
  var root = null
  var keyType = void 0
  var length = 0

  return {
    each: each,
    set: set,
    get: get,
    getTree: getTree,
    getLength: getLength,
    getMaxKey: getMaxKey,
    getMinKey: getMinKey,
    remove: remove,
  }

  function checkKey(key, checkKeyType) {
    var localKeyType = typeof key

    if (
      localKeyType !== 'number' &&
      localKeyType !== 'string' &&
      localKeyType !== 'boolean'
    ) {
      throw new Error("'key' must be a number, a string or a boolean")
    }

    if (checkKeyType === true && localKeyType !== keyType) {
      throw new Error('All keys must be of the same type')
    }

    return localKeyType
  }

  function call(callback) {
    var args = Array.prototype.slice.call(arguments, 1)

    if (typeof callback === 'function') {
      callback.apply(void 0, args)
    }
  }

  function getTree() {
    return root
  }

  function getLength() {
    return length
  }

  function each(callback) {
    internalEach(root, callback)
  }

  function internalEach(node, callback, internalCallback) {
    if (node === null) {
      return call(internalCallback)
    }

    internalEach(node.left, callback, function () {
      call(callback, node.value, node.key)

      internalEach(node.right, callback, function () {
        call(internalCallback)
      })
    })
  }

  function get(key) {
    checkKey(key)

    return internalGet(key, root)
  }

  function internalGet(key, node) {
    if (node === null) {
      return void 0
    }

    if (key < node.key) {
      return internalGet(key, node.left)
    } else if (key > node.key) {
      return internalGet(key, node.right)
    } else {
      return node.value
    }
  }

  function set(key, value) {
    if (root === null) {
      keyType = checkKey(key)
    } else {
      checkKey(key, true)
    }

    root = internalSet(key, value, root)
  }

  function internalSet(key, value, node) {
    if (node === null) {
      length++

      return {
        key: key,
        value: value,
        left: null,
        right: null,
      }
    }

    if (key < node.key) {
      node.left = internalSet(key, value, node.left)
    } else if (key > node.key) {
      node.right = internalSet(key, value, node.right)
    } else {
      node.value = value
    }

    return node
  }

  function getMaxKey() {
    var maxNode = getMaxNode(root)

    if (maxNode !== null) {
      return maxNode.key
    }

    return maxNode
  }

  function getMinKey() {
    var minNode = getMinNode(root)

    if (minNode !== null) {
      return minNode.key
    }

    return minNode
  }

  function getMaxNode(node) {
    while (node !== null && node.right !== null) {
      node = node.right
    }

    return node
  }

  function getMinNode(node) {
    while (node !== null && node.left !== null) {
      node = node.left
    }

    return node
  }

  function remove(key) {
    checkKey(key)

    root = internalRemove(key, root)
  }

  function internalRemove(key, node) {
    if (node === null) {
      return null
    }

    if (key < node.key) {
      node.left = internalRemove(key, node.left)
    } else if (key > node.key) {
      node.right = internalRemove(key, node.right)
    } else {
      if (node.left !== null && node.right !== null) {
        var maxNode = getMaxNode(node.left)

        var maxNodeKey = maxNode.key
        var maxNodeValue = maxNode.value

        maxNode.key = node.key
        maxNode.value = node.value
        node.key = maxNodeKey
        node.value = maxNodeValue

        node.left = internalRemove(key, node.left)
      } else if (node.left !== null) {
        length--
        return node.left
      } else if (node.right !== null) {
        length--
        return node.right
      } else {
        length--
        return null
      }
    }

    return node
  }
}
