/**

A 2d grid map of m rows and n columns is initially filled with water.
We may perform an addLand operation which turns the water at position (row, col) into a land.
Given a list of positions to operate, count the number of islands after each addLand operation.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.

Example:

Input: m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]]
Output: [1,1,2,3]
Explanation:

Initially, the 2d grid grid is filled with water. (Assume 0 represents water and 1 represents land).

0 0 0
0 0 0
0 0 0
Operation #1: addLand(0, 0) turns the water at grid[0][0] into a land.

1 0 0
0 0 0   Number of islands = 1
0 0 0
Operation #2: addLand(0, 1) turns the water at grid[0][1] into a land.

1 1 0
0 0 0   Number of islands = 1
0 0 0
Operation #3: addLand(1, 2) turns the water at grid[1][2] into a land.

1 1 0
0 0 1   Number of islands = 2
0 0 0
Operation #4: addLand(2, 1) turns the water at grid[2][1] into a land.

1 1 0
0 0 1   Number of islands = 3
0 1 0

*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
const numIslands2 = function(m, n, positions) {
  const result = []
  if (m <= 0 || n <= 0) return result
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  let count = 0
  const roots = new Array(m * n).fill(-1)
  for (let p of positions) {
    let root = n * p[0] + p[1]
    if (roots[root] !== -1) {
      result.push(count)
      continue
    }
    roots[root] = root
    count++
    for (let dir of dirs) {
      const x = p[0] + dir[0]
      const y = p[1] + dir[1]
      const nb = n * x + y
      if (x < 0 || x >= m || y < 0 || y >= n || roots[nb] === -1) continue
      const rootNb = findIsland(roots, nb)
      if (root !== rootNb) {
        roots[root] = rootNb
        root = rootNb
        count--
      }
    }
    result.push(count)
  }
  return result
}

function findIsland(roots, id) {
  while (id !== roots[id]) {
    roots[id] = roots[roots[id]]
    id = roots[id]
  }
  return id
}
