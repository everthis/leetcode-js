/**
 * @param {number[][]} A
 * @return {number}
 */
const minFallingPathSum = function(A) {
  for (let i = 1, rows = A.length; i < rows; i++) {
    for (let j = 0, cols = A[0].length; j < cols; j++) {
      A[i][j] += Math.min(
        getValueOrMax(A, i - 1, j - 1),
        getValueOrMax(A, i - 1, j),
        getValueOrMax(A, i - 1, j + 1)
      );
    }
  }
  return Math.min(...A[A.length - 1]);
};

function getValueOrMax(A, i, j) {
  return A[i][j] !== undefined ? A[i][j] : Number.MAX_VALUE;
}

// another

/**
 * @param {number[][]} A
 * @return {number}
 */
const minFallingPathSum = function(A) {
    for (let i = A.length - 2; i >= 0; i -= 1) {
      for (let j = 0; j < A[i].length; j += 1) {
        A[i][j] += Math.min(
          getValueOrMax(A, i + 1, j - 1),
          getValueOrMax(A, i + 1, j),
          getValueOrMax(A, i + 1, j + 1)
        )
      }
    }
    return Math.min(...A[0])
  }
  
  function getValueOrMax(A, i, j) {
    return A[i][j] !== undefined ? A[i][j] : Number.MAX_VALUE
  }
  
