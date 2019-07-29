/**
 * @param {number[][]} grid
 * @return {number}
 */
const largest1BorderedSquare = function(grid) {
  let A = grid
  let m = A.length,
    n = A[0].length
  const left = Array.from(Array(m)).map(() => Array(n).fill(0))
  const top = Array.from(Array(m)).map(() => Array(n).fill(0))
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (A[i][j] > 0) {
        left[i][j] = j > 0 ? left[i][j - 1] + 1 : 1
        top[i][j] = i > 0 ? top[i - 1][j] + 1 : 1
      }
    }
  }
  for (let l = Math.min(m, n); l > 0; --l)
    for (let i = 0; i < m - l + 1; ++i)
      for (let j = 0; j < n - l + 1; ++j)
        if (
          top[i + l - 1][j] >= l &&
          top[i + l - 1][j + l - 1] >= l &&
          left[i][j + l - 1] >= l &&
          left[i + l - 1][j + l - 1] >= l
        )
          return l * l
  return 0
}
