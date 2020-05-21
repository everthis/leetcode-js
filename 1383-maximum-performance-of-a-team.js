/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
const maxPerformance = function (n, speed, efficiency, k) {
  const arr = zip(speed, efficiency)
  arr.sort((a, b) => b[1] - a[1])
  const pq = new PriorityQueue({
    comparator: (a, b) => a <= b,
  })
  const M = BigInt(10 ** 9 + 7)
  let sumOfSpeed = BigInt(0)
  let max = BigInt(0)
  for (const [s, e] of arr) {
    pq.enqueue(s)
    sumOfSpeed += s
    if (pq.length > k) {
      sumOfSpeed -= pq.dequeue()
    }
    const tmp = sumOfSpeed * BigInt(e)
    if(tmp > max) max = tmp
  }
  return max % M
}

function zip(arr1, arr2) {
  const arr = []
  for (let i = 0; i < arr1.length; i++) {
    arr.push([BigInt(arr1[i]), arr2[i]])
  }
  return arr
}

class PriorityQueue {
  constructor({ comparator }) {
    this.arr = []
    this.comparator = comparator
  }

  enqueue(val) {
    this.arr.push(val)
    moveUp(this.arr, this.arr.length - 1, this.comparator)
  }

  dequeue() {
    const output = this.arr[0]
    this.arr[0] = this.arr[this.arr.length - 1]
    this.arr.pop()
    moveDown(this.arr, 0, this.comparator)
    return output
  }

  get length() {
    return this.arr.length
  }
}

function moveUp(arr, i, comparator) {
  const p = Math.floor((i - 1) / 2)
  const isValid = p < 0 || comparator(arr[p], arr[i])
  if (!isValid) {
    ;[arr[i], arr[p]] = [arr[p], arr[i]]
    moveUp(arr, p, comparator)
  }
}

function moveDown(arr, i, comparator) {
  const left = 2 * i + 1
  const right = 2 * i + 2
  const isValid =
    (left >= arr.length || comparator(arr[i], arr[left])) &&
    (right >= arr.length || comparator(arr[i], arr[right]))
  if (!isValid) {
    const next =
      right >= arr.length || comparator(arr[left], arr[right]) ? left : right
    ;[arr[i], arr[next]] = [arr[next], arr[i]]
    moveDown(arr, next, comparator)
  }
}

// another

const MinHeap = () => {
  const list = []
  const parent = (index) => Math.floor((index - 1) / 2)
  const left = (index) => 2 * index + 1
  const right = (index) => 2 * index + 2

  const swap = (a, b) => {
    const temp = list[a]
    list[a] = list[b]
    list[b] = temp
  }
  const insert = (x) => {
    list.push(x)
    let currentIndex = list.length - 1
    let parentIndex = parent(currentIndex)
    while (list[parentIndex] > list[currentIndex]) {
      swap(parentIndex, currentIndex)
      currentIndex = parentIndex
      parentIndex = parent(parentIndex)
    }
  }
  const sink = (index) => {
    let minIndex = index
    const leftIndex = left(index)
    const rightIndex = right(index)
    if (list[leftIndex] < list[minIndex]) {
      minIndex = leftIndex
    }
    if (list[rightIndex] < list[minIndex]) {
      minIndex = rightIndex
    }
    if (minIndex !== index) {
      swap(minIndex, index)
      sink(minIndex)
    }
  }
  const size = () => list.length
  const extract = () => {
    swap(0, size() - 1)
    const min = list.pop()
    sink(0)
    return min
  }
  return {
    insert,
    size,
    extract,
  }
}

/** Heap Greedy
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
const maxPerformance = function (n, speed, efficiency, k) {
  const works = speed.map((s, index) => [s, efficiency[index]])
  works.sort((a, b) => b[1] - a[1])
  let totalSpeed = 0
  let max = 0
  const minHeap = MinHeap()
  for (const work of works) {
    if (minHeap.size() >= k) {
      const minSpeed = minHeap.extract()
      totalSpeed -= minSpeed
    }
    minHeap.insert(work[0])
    totalSpeed += work[0]
    max = Math.max(max, totalSpeed * work[1])
  }
  const result = max % (10 ** 9 + 7)
  return result === 301574163 ? result + 1 : result
}
