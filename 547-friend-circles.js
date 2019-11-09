/**
 * @param {number[][]} M
 * @return {number}
 */
const findCircleNum = function(M) {
  let count = 0
  const visited = {}
  const dfs = function(M, i) {
    for (let j = 0; j < M[i].length; j++) {
      if (M[i][j] == 1 && !visited[j]) {
        visited[j] = true
        dfs(M, j)
      }
    }
  }
  for (let i = 0; i < M.length; i++) {
    if (!visited[i]) {
      dfs(M, i)
      count++
    }
  }
  return count
}
