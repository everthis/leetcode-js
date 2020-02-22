/**

There is a ball in a maze with empty spaces and walls.
The ball can go through empty spaces by rolling up (u), down (d), left (l) or right (r),
but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.
There is also a hole in this maze. The ball will drop into the hole if it rolls on to the hole.

Given the ball position, the hole position and the maze,
find out how the ball could drop into the hole by moving the shortest distance.
The distance is defined by the number of empty spaces traveled by the ball from
the start position (excluded) to the hole (included).
Output the moving directions by using 'u', 'd', 'l' and 'r'.
Since there could be several different shortest ways, you should output the lexicographically smallest way.
If the ball cannot reach the hole, output "impossible".

The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space.
You may assume that the borders of the maze are all walls.
The ball and the hole coordinates are represented by row and column indexes.

Example 1:

Input 1: a maze represented by a 2D array

0 0 0 0 0
1 1 0 0 1
0 0 0 0 0
0 1 0 0 1
0 1 0 0 0

Input 2: ball coordinate (rowBall, colBall) = (4, 3)
Input 3: hole coordinate (rowHole, colHole) = (0, 1)

Output: "lul"

Explanation: There are two shortest ways for the ball to drop into the hole.
The first way is left -> up -> left, represented by "lul".
The second way is up -> left, represented by 'ul'.
Both ways have shortest distance 6, but the first way is lexicographically smaller because 'l' < 'u'. So the output is "lul".

Example 2:

Input 1: a maze represented by a 2D array

0 0 0 0 0
1 1 0 0 1
0 0 0 0 0
0 1 0 0 1
0 1 0 0 0

Input 2: ball coordinate (rowBall, colBall) = (4, 3)
Input 3: hole coordinate (rowHole, colHole) = (3, 0)

Output: "impossible"

Note:

There is only one ball and one hole in the maze.
Both the ball and hole exist on an empty space, and they will not be at the same position initially.
The given maze does not contain border (like the red rectangle in the example pictures),
but you could assume the border of the maze are all walls.
The maze contains at least 2 empty spaces, and the width and the height of the maze won't exceed 30.

*/

/**
 * @param {number[][]} maze
 * @param {number[]} ball
 * @param {number[]} hole
 * @return {string}
 */
function findShortestWay(maze, ball, hole) {
  const H = maze.length
  const W = maze[0].length
  const costs = [...Array(H)].map(r => Array(W).fill(Number.MAX_VALUE))
  let minRoute = ''
  dfs(ball[0], ball[1], 0, '')
  return minRoute || 'impossible'

  function dfs(r, c, cost, route) {
    if (cost >= costs[r][c]) return
    costs[r][c] = cost
    for (let [dr, dc, d] of [
      [1, 0, 'd'],
      [0, -1, 'l'],
      [0, 1, 'r'],
      [-1, 0, 'u']
    ]) {
      let rr = r
      let cc = c
      let steps = 0
      for (
        ;
        rr + dr >= 0 &&
        rr + dr < H &&
        cc + dc >= 0 &&
        cc + dc < W &&
        maze[rr + dr][cc + dc] !== 1;

      ) {
        rr += dr
        cc += dc
        steps++
        if (rr === hole[0] && cc === hole[1]) {
          if (cost + steps < costs[hole[0]][hole[1]]) {
            costs[hole[0]][hole[1]] = cost + steps
            minRoute = route + d
          }
          return
        }
      }
      dfs(rr, cc, cost + steps, route + d)
    }
  }
}

// another

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
