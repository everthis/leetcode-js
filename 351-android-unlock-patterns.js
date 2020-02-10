/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const numberOfPatterns = function(m, n) {
  // Skip array represents number to skip between two pairs
  const skip = Array.from({ length: 10 }, () => new Array(10).fill(0))
  skip[1][3] = skip[3][1] = 2
  skip[1][7] = skip[7][1] = 4
  skip[3][9] = skip[9][3] = 6
  skip[7][9] = skip[9][7] = 8
  skip[1][9] = skip[9][1] = skip[2][8] = skip[8][2] = skip[3][7] = skip[7][3] = skip[4][6] = skip[6][4] = 5
  const vis = new Array(10).fill(false)
  let rst = 0
  // DFS search each length from m to n
  for (let i = m; i <= n; ++i) {
    rst += DFS(vis, skip, 1, i - 1) * 4 // 1, 3, 7, 9 are symmetric
    rst += DFS(vis, skip, 2, i - 1) * 4 // 2, 4, 6, 8 are symmetric
    rst += DFS(vis, skip, 5, i - 1) // 5
  }
  return rst
}

// cur: the current position
// remain: the steps remaining
function DFS(vis, skip, cur, remain) {
  if (remain < 0) return 0
  if (remain === 0) return 1
  vis[cur] = true
  let rst = 0
  for (let i = 1; i <= 9; ++i) {
    // If vis[i] is not visited and (two numbers are adjacent or skip number is already visited)
    if (!vis[i] && (skip[cur][i] === 0 || vis[skip[cur][i]])) {
      rst += DFS(vis, skip, i, remain - 1)
    }
  }
  vis[cur] = false
  return rst
}
