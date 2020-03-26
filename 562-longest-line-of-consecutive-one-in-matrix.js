/**
 * @param {number[][]} M
 * @return {number}
 */
const longestLine = function (M) {
  const m = M.length
  if (!m) return 0
  const n = M[0].length
  if (!n) return 0

  const DP = [...Array(m)].map(() => [...Array(n)].map(() => [0, 0, 0, 0]))
  let max = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j]) {
        DP[i][j][0] = (i ? DP[i - 1][j][0] : 0) + 1
        DP[i][j][1] = (j < n - 1 && i ? DP[i - 1][j + 1][1] : 0) + 1
        DP[i][j][2] = (j && i ? DP[i - 1][j - 1][2] : 0) + 1
        DP[i][j][3] = (j ? DP[i][j - 1][3] : 0) + 1
        max = Math.max(max, ...DP[i][j])
      }
    }
  }
  return max
}
