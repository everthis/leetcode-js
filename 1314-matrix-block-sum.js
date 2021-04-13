/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
const matrixBlockSum = function(mat, k) {
  const m = mat.length, n = mat[0].length
  const rangeSum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      rangeSum[i + 1][j + 1] = rangeSum[i + 1][j] + rangeSum[i][j + 1] - rangeSum[i][j] + mat[i][j]
    }
  }
  const res = Array.from({ length: m }, () => Array(n).fill(0))
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      let r1 = Math.max(0, i - k), c1 = Math.max(0, j - k)
      let r2 = Math.min(m, i + k + 1), c2 = Math.min(n, j + k + 1)
      res[i][j] = rangeSum[r2][c2] - rangeSum[r2][c1] - rangeSum[r1][c2] + rangeSum[r1][c1]
    }
  }

  return res
};
