/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = function (A) {
  const [M, N] = [A.length, A[0].length]
  let ans = 0
  for (let i = 1; i < M; ++i)
    for (let j = 1; j < N; ++j)
      if (A[i][j] && A[i - 1][j] && A[i][j - 1] && A[i - 1][j - 1])
        A[i][j] = 1 + Math.min(A[i - 1][j], A[i][j - 1], A[i - 1][j - 1])
  for (let row of A) ans += row.reduce((a, b) => a + b)
  return ans
}
