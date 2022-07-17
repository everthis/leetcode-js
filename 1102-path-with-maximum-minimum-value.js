/**
 * @param {number[][]} grid
 * @return {number}
 */
const maximumMinimumPath = function (grid) {
  const m = grid.length,
    n = grid[0].length
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]

  const set = new Set()

  let ceil = Math.min(grid[0][0], grid[m - 1][n - 1])
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] <= ceil) {
        set.add(grid[i][j])
      }
    }
  }
  const arr = Array.from(set)
  arr.sort((a, b) => a - b)
  let l = 0,
    r = arr.length - 1
  while (l < r) {
    const mid = r - ((r - l) >> 1)
    if (valid(arr[mid])) {
      l = mid
    } else {
      r = mid - 1
    }
  }

  return arr[l]

  function valid(v) {
    const memo = Array.from({ length: m }, () => Array(n).fill(0))

    function dfs(x, y) {
      if (x === m - 1 && y === n - 1) return true
      memo[x][y] = 1
      for (const [dx, dy] of dirs) {
        const nx = x + dx,
          ny = y + dy
        if (
          nx >= 0 &&
          nx < m &&
          ny >= 0 &&
          ny < n &&
          memo[nx][ny] === 0 &&
          grid[nx][ny] >= v &&
          dfs(nx, ny)
        )
          return true
      }
      return false
    }

    return dfs(0, 0)
  }
}
