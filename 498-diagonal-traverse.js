/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDiagonalOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return []
  }
  const m = matrix.length
  const n = matrix[0].length
  const output = []
  for (let sum = 0; sum <= m + n - 2; sum++) {
    for (
      let i = Math.min(m - 1, sum);
      sum % 2 === 0 && isValid(i, sum - i, m, n);
      i--
    ) {
      const j = sum - i
      output.push(matrix[i][j])
    }
    for (
      let j = Math.min(n - 1, sum);
      sum % 2 === 1 && isValid(sum - j, j, m, n);
      j--
    ) {
      const i = sum - j
      output.push(matrix[i][j])
    }
  }
  return output
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false
  }
  return true
}
