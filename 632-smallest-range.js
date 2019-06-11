/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const smallestRange = function(nums) {
  if (nums.length === 1) return [nums[0], nums[0]]
  const pq = new PQ((a, b) => a.v < b.v)
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].length > 0) {
      const top = nums[i].shift()
      pq.push({ v: top, i })
      min = Math.min(min, top)
      max = Math.max(max, top)
    }
  }
  let bestRange = [min, max]
  while (pq.size() > 0) {
    const { v, i } = pq.pop()
    if (nums[i].length === 0) return bestRange
    const newVal = nums[i].shift()
    pq.push({ v: newVal, i })
    min = pq.peek().v
    max = Math.max(max, newVal)
    if (max - min < bestRange[1] - bestRange[0]) {
      bestRange = [min, max]
    }
  }
  return bestRange
}

function PQ(f) {
  this.q = []
  this.f = f
}

PQ.prototype.size = function() {
  return this.q.length
}

PQ.prototype.peek = function() {
  return this.q[0]
}

PQ.prototype.push = function(v) {
  const q = this.q
  let i = q.length
  q.push(v)
  let parent = Math.floor((i - 1) / 2)
  while (parent >= 0 && this.f(q[i], q[parent])) {
    this.swap(i, parent)
    i = parent
    parent = Math.floor((i - 1) / 2)
  }
}

PQ.prototype.pop = function() {
  const q = this.q
  if (q.length === 0) return null
  this.swap(0, q.length - 1)
  let i = 0
  let lc = 1
  let rc = 2
  while (lc < q.length - 1) {
    let r = i
    if (this.f(q[lc], q[r])) {
      r = lc
    }
    if (rc < q.length - 1 && this.f(q[rc], q[r])) {
      r = rc
    }
    if (r === i) break
    this.swap(i, r)
    i = r
    lc = i * 2 + 1
    rc = i * 2 + 2
  }
  return q.pop()
}

PQ.prototype.swap = function(i, j) {
  const q = this.q
  const t = q[i]
  q[i] = q[j]
  q[j] = t
}

// another

function Queue() {
  this.data = []
}

Queue.prototype.pop = function() {
  return this.data.shift()
}

Queue.prototype.getMax = function() {
  let n = this.data.length - 1
  let max = this.data[n]
  if (max === undefined) {
    return 100000000
  }
  return max.val
}

Queue.prototype.getMin = function() {
  let min = this.data[0]
  if (min === undefined) {
    return -100000000
  }
  return min.val
}

Queue.prototype.add = function(node) {
  if (!this.data.length) {
    this.data.push(node)
    return
  }

  let index = findIndex(this.data, node)
  this.data.splice(index, 0, node)
  return true

  function findIndex(arr, node) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (arr[mid].val === node.val) {
        return mid
      }

      if (arr[mid].val > node.val) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return left
  }
}

function Node(list, val, index) {
  this.list = list
  this.val = val
  this.index = index
}
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  let queue = new Queue()
  for (let i = 0; i < nums.length; i++) {
    let node = new Node(i, nums[i][0], 0)
    queue.add(node)
  }

  let a = Math.min(queue.getMin(), queue.getMax())
  let b = Math.max(queue.getMin(), queue.getMax())
  let ans = [a, b]
  let min = ans[1] - ans[0]
  for (;;) {
    let a = Math.min(queue.getMin(), queue.getMax())
    let b = Math.max(queue.getMin(), queue.getMax())
    if (b - a < min) {
      min = b - a
      ans = [a, b]
    }

    let m = queue.pop()
    let list = nums[m.list]
    let index = m.index
    if (index + 1 < list.length) {
      m.index++
      m.val = list[m.index]
      queue.add(m)
    } else {
      break
    }
  }

  return ans
}
