/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = function (matrix) {
  const [m, n] = [matrix.length, matrix[0].length]
  let res = 0
  for(let i = 0;  i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(matrix[i][j] && i > 0 && j > 0) {
        matrix[i][j] = 1 + Math.min(
          matrix[i - 1][j],
          matrix[i][j - 1],
          matrix[i - 1][j - 1],
        )
      }
      res += matrix[i][j]
    }
  }
  return res
}

// another

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = function (A) {
  const [M, N] = [A.length, A[0].length]
  let ans = 0
  for (let i = 0; i < M; ++i) {
    for (let j = 0; j < N; ++j) {
      if (A[i][j] && i > 0 && j > 0) {
        A[i][j] = 1 + Math.min(A[i - 1][j], A[i][j - 1], A[i - 1][j - 1])
      }
      ans += A[i][j]
    }
  }
  return ans
}
