/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
const largestOverlap = function(A, B) {
    const N = A.length
    const count = constructMatrix(2*N, 2*N, 0)
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (A[i][j] === 1) {
          for(let ii = 0; ii < N; ii++) {
            for(let jj = 0; jj < N; jj++) {
              if(B[ii][jj] === 1) {
                count[i-ii+N][j-jj+N] += 1
              }
            }
          }
        }
      }
    }
    let ans = 0

    for(let row of count) {
      for(let v of row) {
        ans = Math.max(ans, v)
      }
    }
    return ans
};

function constructMatrix(row, col, init = 0) {
  const matrix = []
  for(let i = 0; i < row; i++) {
    matrix[i] = []
    for(let j = 0; j < col; j++) {
      matrix[i][j] = init
    }
  }
  return matrix
}

console.log(largestOverlap([[1,1,0],
    [0,1,0],
    [0,1,0]],[[0,0,0],
    [0,1,1],
    [0,0,1]]))