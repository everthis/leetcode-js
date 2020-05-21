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
