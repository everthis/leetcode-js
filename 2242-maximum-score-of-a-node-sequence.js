class Heap {
  constructor(data = []) {
    this.data = data
    this.comparator = (a, b) => a[1] - b[1]
    this.heapify()
  }

  // O(nlog(n)). In fact, O(n)
  heapify() {
    if (this.size() < 2) return
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i)
    }
  }

  // O(1)
  peek() {
    if (this.size() === 0) return null
    return this.data[0]
  }

  // O(log(n))
  offer(value) {
    this.data.push(value)
    this.bubbleUp(this.size() - 1)
  }

  // O(log(n))
  poll() {
    if (this.size() === 0) return null
    const result = this.data[0]
    const last = this.data.pop()
    if (this.size() !== 0) {
      this.data[0] = last
      this.bubbleDown(0)
    }
    return result
  }

  // O(log(n))
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  // O(log(n))
  bubbleDown(index) {
    const lastIndex = this.size() - 1
    while (true) {
      const leftIndex = index * 2 + 1
      const rightIndex = index * 2 + 2
      let findIndex = index
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex
      }
      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex
      }
      if (index !== findIndex) {
        this.swap(index, findIndex)
        index = findIndex
      } else {
        break
      }
    }
  }

  // O(1)
  swap(index1, index2) {
    ;[this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ]
  }

  // O(1)
  size() {
    return this.data.length
  }

  toArray() {
    return this.data.reverse().map((dt) => dt.index)
  }
}

/**
 * @param {number[]} scores
 * @param {number[][]} edges
 * @return {number}
 */
const maximumScore = (scores, edges) => {
  const n = scores.length
  const top3 = new Array(n).fill().map(() => new Heap())

  for (const [u, v] of edges) {
    top3[u].offer([v, scores[v]])
    if (top3[u].size() > 3) top3[u].poll()
    top3[v].offer([u, scores[u]])
    if (top3[v].size() > 3) top3[v].poll()
  }

  const top3Array = new Array(n)

  for (let i = 0; i < n; i++) {
    top3Array[i] = [...top3[i].data]
  }

  let ans = -1
  for (let [b, c] of edges) {
    if (top3[b].size() < 2 || top3[c].size() < 2) {
      continue
    }

    const score = scores[b] + scores[c]

    for (let [a, scoreA] of top3Array[b]) {
      for (let [d, scoreD] of top3Array[c]) {
        if (a !== b && a !== c && d !== b && d !== c && a !== d) {
          ans = Math.max(ans, scoreA + score + scoreD)
        }
      }
    }
  }

  return ans
}
