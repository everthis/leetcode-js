/**
 * @param {number} capacity
 */
const DinnerPlates = function (capacity) {
  this.capacity = capacity
  this.stacks = []
  this.pq = new PriorityQueue()
}

/**
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function (val) {
  if (this.pq.isEmpty()) {
    if (
      this.stacks.length > 0 &&
      this.stacks[this.stacks.length - 1].length < this.capacity
    ) {
      this.stacks[this.stacks.length - 1].push(val)
    } else {
      this.stacks.push([])
      this.stacks[this.stacks.length - 1].push(val)
    }
  } else {
    const num = this.pq.pop()
    this.stacks[num].push(val)
  }
}

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function () {
  while (
    this.stacks.length > 0 &&
    this.stacks[this.stacks.length - 1].length === 0
  ) {
    const len = this.stacks.length - 1
    while (!this.pq.isEmpty() && this.pq.peek() >= len) {
      this.pq.pop()
    }
    this.stacks.pop()
  }
  if (this.stacks.length === 0) {
    return -1
  } else {
    return this.stacks[this.stacks.length - 1].pop()
  }
}

/**
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function (index) {
  const st = this.stacks[index]

  if (st && st.length > 0) {
    this.pq.push(index)
    return st.pop()
  }

  return -1
}

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */
class PriorityQueue {
  constructor(len, compare) {
    this.compare = (a, b) => {
      return a < b
    }
    this.last = 0
    this.arr = []
  }
  push(val) {
    this.last++
    this.arr[this.last] = val
    this.up(this.last)
  }
  pop() {
    if (this.isEmpty()) {
      return null
    }
    const res = this.arr[1]
    this.swap(1, this.last)
    this.last--
    this.down(1)
    return res
  }
  up(lo) {
    while (lo > 1) {
      const currEl = this.arr[lo]
      const parent = Math.floor(lo / 2)
      const parentEl = this.arr[parent]
      if (this.compare(currEl, parentEl)) {
        this.swap(lo, parent)
      } else {
        break
      }
      lo = parent
    }
  }
  down(hi) {
    while (hi * 2 <= this.last) {
      const currEl = this.arr[hi]
      let nextEl = this.arr[hi * 2]
      let nextIndex = hi * 2
      if (
        hi * 2 + 1 <= this.last &&
        this.compare(this.arr[hi * 2 + 1], nextEl)
      ) {
        nextIndex = hi * 2 + 1
        nextEl = this.arr[nextIndex]
      }
      if (this.compare(nextEl, currEl)) {
        this.swap(hi, nextIndex)
      } else {
        break
      }
      hi = nextIndex
    }
  }
  swap(i, j) {
    const temp = this.arr[i]
    this.arr[i] = this.arr[j]
    this.arr[j] = temp
  }
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.arr[1]
  }
  isEmpty() {
    return this.last < 1
  }
}

// another

/**
 * @param {number} capacity
 */
const DinnerPlates = function (capacity) {
  this.pushIndex = 0
  this.popIndex = 0
  this.capacity = capacity
  this.stacks = [[]]
}

/**
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function (val) {
  while (
    this.pushIndex < this.stacks.length &&
    this.stacks[this.pushIndex].length === this.capacity
  ) {
    this.pushIndex++
  }
  if (this.stacks.length === this.pushIndex) {
    this.stacks[this.pushIndex] = [val]
  } else {
    this.stacks[this.pushIndex].push(val)
  }
  if (this.popIndex < this.pushIndex) {
    this.popIndex = this.pushIndex
  }
}

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function () {
  while (this.stacks[this.popIndex].length === 0) {
    if (this.popIndex > 0) {
      this.popIndex--
    } else {
      return -1
    }
  }
  const valueAtIndex = this.stacks[this.popIndex].pop()
  if (this.pushIndex > this.popIndex) {
    this.pushIndex = this.popIndex
  }
  return valueAtIndex
}

/**
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function (index) {
  if (index >= this.stacks.length) return -1
  if (index < this.pushIndex) this.pushIndex = index
  return this.stacks[index].length > 0 ? this.stacks[index].pop() : -1
}

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */

