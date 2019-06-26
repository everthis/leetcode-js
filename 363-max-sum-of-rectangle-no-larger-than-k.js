/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const maxSumSubmatrix = function(matrix, k) {
  const row = matrix.length,
    col = matrix[0].length
  let result = -Infinity
  for (let i = 0; i < col; i++) {
    let rowSum = Array(row).fill(0)
    for (let j = i; j < col; j++) {
      let sum = 0,
        max = -Infinity
      for (let r = 0; r < row; r++) {
        rowSum[r] += matrix[r][j]
        if (sum < 0) sum = 0
        sum += rowSum[r]
        max = Math.max(max, sum)
      }
      if (max <= k) result = Math.max(result, max)
      else {
        max = -Infinity
        for (let m = 0; m < row; m++) {
          sum = 0
          for (let n = m; n < row; n++) {
            sum += rowSum[n]
            if (sum <= k) max = Math.max(max, sum)
          }
        }
        result = Math.max(result, max)
      }
      if (result === k) return k
    }
  }
  return result
}
