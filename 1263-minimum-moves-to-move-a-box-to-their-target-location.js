/**
 * @param {character[][]} grid
 * @return {number}
 */
const minPushBox = function (grid) {
  let box, person, target
  const m = grid.length,
    n = grid[0].length
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const e = grid[i][j]
      if (e === 'B') box = [i, j]
      else if (e === 'T') target = [i, j]
      else if (e === 'S') person = [i, j]
    }
  }

  const valid = ([i, j]) => {
    return i >= 0 && i < m && j >= 0 && j < n && grid[i][j] !== '#'
  }
  const key = ([i, j]) => `${i},${j}`

  const chk = (person, newPerson, box) => {
    const set = new Set()
    set.add(key(box))
    let q = [person]
    while (q.length) {
      const tmp = []
      const size = q.length
      for (let i = 0; i < size; i++) {
        const [x, y] = q[i]
        if (key([x, y]) === key(newPerson)) return true
        for (const [dx, dy] of dirs) {
          const [nx, ny] = [x + dx, y + dy]
          if (valid([nx, ny]) && !set.has(key([nx, ny]))) {
            set.add(key([nx, ny]))
            tmp.push([nx, ny])
          }
        }
      }
      q = tmp
    }
    return false
  }


  let q = [[0, box, person]]
  const dkey = (a, b) => `${a[0]},${a[1]}_${b[0]},${b[1]}`
  const set = new Set()
  set.add(dkey(box, person))
  while (q.length) {
    const size = q.length
    const tmp = []
    for (let i = 0; i < size; i++) {
      const [v, b, p] = q[i]
      if (key(b) === key(target)) return v
      const bArr = [
        [b[0], b[1] + 1],
        [b[0], b[1] - 1],
        [b[0] + 1, b[1]],
        [b[0] - 1, b[1]],
      ]
      const pArr = [
        [b[0], b[1] - 1],
        [b[0], b[1] + 1],
        [b[0] - 1, b[1]],
        [b[0] + 1, b[1]],
      ]

      for (let j = 0; j < 4; j++) {
        const nb = bArr[j],
          np = pArr[j]
        const nk = dkey(nb, b)

        if (set.has(nk)) continue
        if (valid(nb) && valid(np) && chk(p, np, b)) {
          tmp.push([v + 1, nb, b])
          set.add(nk)
        }
      }
    }
    q = tmp
  }

  return -1
}

// another


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

// another

/**
 * @param {character[][]} grid
 * @return {number}
 */
 const minPushBox = function (grid) {
  const m = grid.length,
    n = grid[0].length
  let target, person, box
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 'T') target = [i, j]
      else if (grid[i][j] === 'B') box = [i, j]
      else if (grid[i][j] === 'S') person = [i, j]
    }
  }

  const valid = ([x, y]) => {
    return x >= 0 && x < m && y >= 0 && y < n && grid[x][y] !== '#'
  }

  const check = (cur, dest, box) => {
    const q = [cur]
    const visited = new Set([`${box[0]},${box[1]}`])
    const dirs = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ]

    while (q.length) {
      const pos = q.shift()
      if (pos.join(',') === dest.join(',')) return true
      const newPos = []
      for (const [dx, dy] of dirs) newPos.push([pos[0] + dx, pos[1] + dy])
      for (const [nx, ny] of newPos) {
        const k = `${nx},${ny}`
        if (valid([nx, ny]) && !visited.has(k)) {
          visited.add(k)
          q.push([nx, ny])
        }
      }
    }

    return false
  }

  const q = [[0, box, person]]
  const vis = new Set([`${box.join(',')},${person.join(',')}`])
  while (q.length) {
    const [dist, box, person] = q.shift()
    if (box.join(',') === target.join(',')) return dist

    const bCoord = [
      [box[0] + 1, box[1]],
      [box[0] - 1, box[1]],
      [box[0], box[1] + 1],
      [box[0], box[1] - 1],
    ]
    const pCoord = [
      [box[0] - 1, box[1]],
      [box[0] + 1, box[1]],
      [box[0], box[1] - 1],
      [box[0], box[1] + 1],
    ]

    for (let i = 0; i < 4; i++) {
      const [newBox, newPerson] = [bCoord[i], pCoord[i]]
      const key = `${newBox.join(',')},${box.join(',')}`
      if (valid(newBox) && !vis.has(key)) {
        if (valid(newPerson) && check(person, newPerson, box)) {
          vis.add(key)
          q.push([dist + 1, newBox, box])
        }
      }
    }
  }

  return -1
}

