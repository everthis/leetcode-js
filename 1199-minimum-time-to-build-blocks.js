/**
 * @param {number[]} blocks
 * @param {number} split
 * @return {number}
 */
const minBuildTime = function (blocks, split) {
  const minHeap = new MinHeap()
  blocks.forEach((block) => minHeap.push(block))
  while (minHeap.size() > 1) {
    minHeap.pop()
    minHeap.push(minHeap.pop() + split)
  }
  return minHeap.pop()
}

class MinHeap {
  constructor() {
    this.store = []
  }
  size() {
    return this.store.length
  }
  push(value) {
    this.store.push(value)
    this.heapifyUp(this.store.length - 1)
  }
  pop() {
    if (this.store.length < 2) return this.store.pop()
    let result = this.store[0]
    this.store[0] = this.store.pop()
    this.heapifyDown(0)
    return result
  }
  heapifyUp(child) {
    const parent = Math.floor((child - 1) / 2)
    if (child && this.store[child] < this.store[parent]) {
      const temp = this.store[child]
      this.store[child] = this.store[parent]
      this.store[parent] = temp
      this.heapifyUp(parent)
    }
  }
  heapifyDown(parent) {
    const childs = [1, 2]
      .map((n) => parent * 2 + n)
      .filter((n) => n < this.store.length)
    let child = childs[0]
    if (childs[1] && this.store[childs[1]] < this.store[child]) {
      child = childs[1]
    }
    if (child && this.store[child] < this.store[parent]) {
      const temp = this.store[child]
      this.store[child] = this.store[parent]
      this.store[parent] = temp
      this.heapifyDown(child)
    }
  }
}
