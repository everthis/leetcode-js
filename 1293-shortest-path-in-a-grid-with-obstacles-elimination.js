/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
const shortestPath = function (grid, k) {
  const m = grid.length
  const n = m && grid[0].length
  if (m === 1 && n === 1) return 0
  const queue = [[0, 0, k]]
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  const visited = new Set()
  let steps = 0
  while (queue.length > 0) {
    let size = queue.length
    while (size--) {
      const [row, col, em] = queue.shift()
      if (visited.has(row + "#" + col + "#" + em)) continue
      visited.add(row + "#" + col + "#" + em)
      for (let dir of dirs) {
        const nx = row + dir[0]
        const ny = col + dir[1]
        if (
          nx < 0 ||
          nx >= m ||
          ny < 0 ||
          ny >= n ||
          visited.has(nx + "#" + ny + "#" + em)
        )
          continue
        if (nx === m - 1 && ny === n - 1) return steps + 1
        if (grid[nx][ny] === 1) {
          if (em > 0) queue.push([nx, ny, em - 1])
        } else {
          queue.push([nx, ny, em])
        }
      }
    }
    steps++
  }
  return -1
}
