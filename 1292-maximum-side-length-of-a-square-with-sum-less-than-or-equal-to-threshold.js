/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
const maxSideLength = function (mat, threshold) {
  let m = mat.length
  let n = mat[0].length
  const sum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  let res = 0
  let len = 1 // square side length

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      sum[i][j] =
        sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1] + mat[i - 1][j - 1]

      if (
        i >= len &&
        j >= len &&
        sum[i][j] - sum[i - len][j] - sum[i][j - len] + sum[i - len][j - len] <=
          threshold
      )
        res = len++
    }
  }

  return res
}
