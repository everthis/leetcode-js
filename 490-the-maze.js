/**

There is a ball in a maze with empty spaces and walls.
The ball can go through empty spaces by rolling up, down, left or right,
but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.
Given the ball's start position, the destination and the maze, determine whether the ball could stop at the destination.

The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space.
You may assume that the borders of the maze are all walls.
The start and destination coordinates are represented by row and column indexes.

Example 1:

Input 1: a maze represented by a 2D array

0 0 1 0 0
0 0 0 0 0
0 0 0 1 0
1 1 0 1 1
0 0 0 0 0

Input 2: start coordinate (rowStart, colStart) = (0, 4)
Input 3: destination coordinate (rowDest, colDest) = (4, 4)

Output: true

Explanation: One possible way is : left -> down -> left -> down -> right -> down -> right.

Example 2:

Input 1: a maze represented by a 2D array

0 0 1 0 0
0 0 0 0 0
0 0 0 1 0
1 1 0 1 1
0 0 0 0 0

Input 2: start coordinate (rowStart, colStart) = (0, 4)
Input 3: destination coordinate (rowDest, colDest) = (3, 2)

Output: false

Explanation: There is no way for the ball to stop at the destination.

Note:

There is only one ball and one destination in the maze.
Both the ball and the destination exist on an empty space, and they will not be at the same position initially.
The given maze does not contain border (like the red rectangle in the example pictures),
but you could assume the border of the maze are all walls.
The maze contains at least 2 empty spaces, and both the width and height of the maze won't exceed 100.

*/

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
const hasPath = function(maze, start, destination) {
  const m = maze.length
  const n = maze[0].length
  const queue = []
  const visited = Array.from({ length: m }, () => new Array(n).fill(false))
  queue.push(start)
  const dirs = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0]
  ]
  while (queue.length) {
    const cur = queue.shift()
    if (cur[0] === destination[0] && cur[1] === destination[1]) return true
    if (visited[cur[0]][cur[1]]) continue
    visited[cur[0]][cur[1]] = true
    for (let dir of dirs) {
      let x = cur[0],
        y = cur[1]
      while (x >= 0 && x < m && y >= 0 && y < n && maze[x][y] === 0) {
        x += dir[0]
        y += dir[1]
      }
      x -= dir[0]
      y -= dir[1]
      queue.push([x, y])
    }
  }
  return false
}

// another

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
const hasPath = function(maze, start, destination) {
  const visited = Array.from({ length: maze.length }, () =>
    new Array(maze[0].length).fill(false)
  )
  const dirs = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0]
  ]
  return dfs(maze, start, destination, visited, dirs)
}

function dfs(maze, start, destination, visited, dirs) {
  if (visited[start[0]][start[1]]) return false
  if (start[0] === destination[0] && start[1] === destination[1]) return true
  visited[start[0]][start[1]] = true
  for (let i = 0; i < dirs.length; i++) {
    const d = dirs[i]
    let row = start[0]
    let col = start[1]
    while (isValid(maze, row + d[0], col + d[1])) {
      row += d[0]
      col += d[1]
    }
    if (dfs(maze, [row, col], destination, visited, dirs)) return true
  }
  return false
}

function isValid(maze, row, col) {
  return (
    row >= 0 &&
    row < maze.length &&
    col >= 0 &&
    col < maze[0].length &&
    maze[row][col] !== 1
  )
}
