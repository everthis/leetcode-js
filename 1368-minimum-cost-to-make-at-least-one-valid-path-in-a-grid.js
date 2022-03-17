/**
 * @param {number[][]} grid
 * @return {number}
 */
function minCost(grid) {
  const m = grid.length, n = grid[0].length
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]] // right, left, down, up
  const dp = Array.from({ length: m }, () => Array(n).fill(Infinity))
  let q = [[0, 0]]
  dp[0][0] = 0
  while(q.length) {
    const tmp = []
    for(let idx = q.length - 1; idx >= 0; idx--) {
      const [r, c] = q[idx]
      for(let i = 0; i < dirs.length; i++) {
        const [dr, dc] = dirs[i]
        const nr = r + dr, nc = c + dc
        if(nr < 0 || nr >= m || nc < 0 || nc >= n) continue
        if(dp[nr][nc] > dp[r][c] + (i === grid[r][c] - 1 ? 0 : 1)) {
          dp[nr][nc] = dp[r][c] + (i === grid[r][c] - 1 ? 0 : 1)
          tmp.push([nr, nc])
        }
      }
    }
    q = tmp
  }

  return dp[m - 1][n - 1]
}

// another

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

// another

function minCost(grid) {
  const INF = 1e9, m = grid.length, n = grid[0].length
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]] // right, left, down, up
  let cost = 0
  const dp = Array.from({ length: m }, () => Array(n).fill(INF))
  const q = []
  dfs(0, 0, 0)
  while(q.length) {
    cost++
    for (let size = q.length; size > 0; size--) {
      const [r, c] = q.shift()
      for(let [dx, dy] of dirs) {
        dfs(r + dx, c + dy, cost)
      }
    }
  }

  return dp[m - 1][n - 1]
  function dfs(r, c, cost) {
    if(r < 0 || r >= m || c < 0 || c >= n || dp[r][c] !== INF) return
    dp[r][c] = cost
    q.push([r, c])
    const nextDir = grid[r][c] - 1
    const [dx, dy] = dirs[nextDir]
    dfs(r + dx, c + dy, cost)
  }
}

