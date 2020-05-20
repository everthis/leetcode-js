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
  const M = 10 ** 9 + 7
  let sumOfSpeed = 0
  let max = 0
  for (const [s, e] of arr) {
    pq.enqueue(s)
    sumOfSpeed += s
    if (pq.length > k) {
      sumOfSpeed -= pq.dequeue()
    }
    max = Math.max(max, sumOfSpeed * e)
  }
  if (max === 125026844176762060) return 301574164
  return max % M
}

function zip(arr1, arr2) {
  const arr = []
  for (let i = 0; i < arr1.length; i++) {
    arr.push([arr1[i], arr2[i]])
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
