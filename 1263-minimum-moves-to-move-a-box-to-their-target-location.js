/**
 * @param {character[][]} grid
 * @return {number}
 */
const minPushBox = function (grid) {
  if (
    typeof grid === 'undefined' ||
    grid === null ||
    grid.length === 0 ||
    grid[0].length === 0
  ) {
    return -1
  }

  let TARGET = null
  let startBlk = null
  let startPer = null
  const DIR = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 'S') {
        startPer = [i, j]
        grid[i][j] = '.'
      }
      if (grid[i][j] === 'T') {
        TARGET = [i, j]
      }
      if (grid[i][j] === 'B') {
        startBlk = [i, j]
        grid[i][j] = '.'
      }
    }
  }

  let queue = new PriorityQueue((a, b) => a.weight < b.weight)
  let states = new Map()
  queue.push({
    weight: manDist(startBlk),
    block: startBlk,
    character: startPer,
    move: 0,
  })
  while (!queue.isEmpty()) {
    let { weight, block, character, move } = queue.pop()
    if (TARGET[0] === block[0] && TARGET[1] === block[1]) {
      return move
    }
    let key = block[0] * grid[0].length + block[1]
    let val = character[0] * grid[0].length + character[1]
    if (!states.has(key)) {
      states.set(key, new Set())
    }
    states.get(key).add(val)
    DIR.forEach((d) => {
      let i = d[0] + character[0]
      let j = d[1] + character[1]
      let curV = i * grid[0].length + j
      if (validMove(i, j, block[0], block[1]) && !states.get(key).has(curV)) {
        queue.push({
          weight: manDist(block) + move,
          block: block,
          character: [i, j],
          move: move,
        })
      }
    })
    let pushDir = tryPush(character, block)
    if (pushDir !== null) {
      let newBlk = [block[0] + pushDir[0], block[1] + pushDir[1]]
      let newCha = [character[0] + pushDir[0], character[1] + pushDir[1]]
      let nBK = newBlk[0] * grid[0].length + newBlk[1]
      let nVal = newCha[0] * grid[0].length + newCha[1]
      if (!states.has(nBK) || !states.get(nBK).has(nVal)) {
        queue.push({
          weight: manDist(newBlk) + (move + 1),
          block: newBlk,
          character: newCha,
          move: move + 1,
        })
      }
    }
  }

  return -1

  function manDist(block) {
    let [x, y] = TARGET
    let [i, j] = block
    return Math.abs(x - i) + Math.abs(y - j)
  }
  function validMove(i, j, x = null, y = null) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
      return false
    }
    if (
      (x !== null && i === x && y !== null && j === y) ||
      grid[i][j] === '#'
    ) {
      return false
    }
    return true
  }
  function tryPush(c, b) {
    let [i, j] = c
    let [x, y] = b
    for (let u = 0; u < DIR.length; u++) {
      let [v, w] = DIR[u]
      if (
        ((Math.abs(x - i) === 1 && y === j) ||
          (Math.abs(y - j) === 1 && x === i)) &&
        validMove(i + v, j + w) &&
        validMove(x + v, y + w) &&
        i + v === x &&
        j + w === y
      ) {
        return [v, w]
      }
    }
    return null
  }
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
