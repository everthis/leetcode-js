const dirs = [
  [1, 0, 'd'],
  [0, -1, 'l'],
  [0, 1, 'r'],
  [-1, 0, 'u']
]

/**
 * @param {number[][]} maze
 * @param {number[]} ball
 * @param {number[]} hole
 * @return {string}
 */
const findShortestWay = function(maze, ball, hole) {
  const m = maze.length
  const n = maze[0].length
  const dist = [...new Array(m)].map(() => new Array(n).fill(Infinity))
  dist[ball[0]][ball[1]] = 0
  const pq = new PriorityQueue({
    comparator: (a, b) => {
      if (dist[a[0][0]][a[0][1]] !== dist[b[0][0]][b[0][1]]) {
        return dist[a[0][0]][a[0][1]] < dist[b[0][0]][b[0][1]]
      }
      return a[1] < b[1]
    }
  })
  pq.enqueue([ball, ''])
  while (pq.length) {
    const [[x, y], path] = pq.dequeue()
    if (x === hole[0] && y === hole[1]) {
      return path
    }
    for (const [di, dj, dir] of dirs) {
      if (isValidPosition(x + di, y + dj, m, n) && maze[x + di][y + dj] === 0) {
        const [i, j] = walk(maze, x + di, y + dj, di, dj, m, n, hole)
        const deltaDist = Math.abs(x - i) + Math.abs(y - j)
        if (dist[x][y] + deltaDist <= dist[i][j]) {
          dist[i][j] = dist[x][y] + deltaDist
          pq.enqueue([[i, j], path + dir])
        }
      }
    }
  }
  return 'impossible'
}

function walk(maze, x, y, di, dj, m, n, [hi, hj]) {
  let i = x
  let j = y
  while (
    isValidPosition(i + di, j + dj, m, n) &&
    maze[i + di][j + dj] === 0 &&
    !(hi === i && hj === j)
  ) {
    i += di
    j += dj
  }
  return [i, j]
}

function isValidPosition(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false
  }
  return true
}

class PriorityQueue {
  constructor({ comparator }) {
    this.comparator = comparator
    this.arr = []
  }

  enqueue(element) {
    this.arr.push(element)
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
