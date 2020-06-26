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

// another

/**
 * @param {character[][]} grid
 * @return {number}
 */
const minPushBox = function (grid) {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  const dis = new Map()
  const rows = grid.length
  const cols = grid[0].length
  let sk, box, target
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'B') box = [i, j]
      else if (grid[i][j] === 'S') sk = [i, j]
      else if (grid[i][j] === 'T') target = [i, j]
    }
  }
  const q = []
  const start = encode(box[0], box[1], sk[0], sk[1])
  dis.set(start, 0)
  q.push(start)
  let res = Number.MAX_VALUE
  while (q.length) {
    const u = q.pop()
    const du = decode(u)
    if (dis.get(u) >= res) continue
    if (du[0] === target[0] && du[1] === target[1]) {
      res = Math.min(res, dis.get(u))
      continue
    }
    const b = [du[0], du[1]]
    const s = [du[2], du[3]]
    for (let dir of dirs) {
      const nsx = s[0] + dir[0]
      const nsy = s[1] + dir[1]
      if (
        nsx < 0 ||
        nsx >= rows ||
        nsy < 0 ||
        nsy >= cols ||
        grid[nsx][nsy] === '#'
      )
        continue
      if (nsx === b[0] && nsy === b[1]) {
        const nbx = b[0] + dir[0]
        const nby = b[1] + dir[1]
        if (
          nbx < 0 ||
          nbx >= rows ||
          nby < 0 ||
          nby >= cols ||
          grid[nbx][nby] === '#'
        )
          continue
        const v = encode(nbx, nby, nsx, nsy)
        if (dis.has(v) && dis.get(v) <= dis.get(u) + 1) continue
        dis.set(v, dis.get(u) + 1)
        q.push(v)
      } else {
        const v = encode(b[0], b[1], nsx, nsy)
        if (dis.has(v) && dis.get(v) <= dis.get(u)) continue
        dis.set(v, dis.get(u))
        q.push(v)
      }
    }
  }
  return res === Number.MAX_VALUE ? -1 : res

  function encode(bx, by, sx, sy) {
    return (bx << 24) | (by << 16) | (sx << 8) | sy
  }
  function decode(num) {
    const res = []
    res[0] = (num >>> 24) & 0xff
    res[1] = (num >>> 16) & 0xff
    res[2] = (num >>> 8) & 0xff
    res[3] = num & 0xff
    return res
  }
}

