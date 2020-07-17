/**
 * @param {number[][]} grid
 * @return {number}
 */
const minCost = function (grid) {
  const n = grid.length
  const m = grid[0].length
  const moves = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  const dp = [...new Array(n)].map((e) => [...new Array(m)].fill(Infinity))
  dp[0][0] = 0
  let queue = [[0, 0]]
  while (queue.length > 0) {
    const temp = []
    for (let i = 0; i < queue.length; i++) {
      const [x, y] = queue[i]
      for (let j = 0; j < moves.length; j++) {
        const nextX = x + moves[j][0]
        const nextY = y + moves[j][1]
        if (nextX >= 0 && nextY >= 0 && nextX < n && nextY < m) {
          if (dp[nextX][nextY] > dp[x][y] + (grid[x][y] - 1 === j ? 0 : 1)) {
            dp[nextX][nextY] = dp[x][y] + (grid[x][y] - 1 === j ? 0 : 1)
            queue.push([nextX, nextY])
          }
        }
      }
    }
    queue = temp
  }
  return dp[n - 1][m - 1]
}
