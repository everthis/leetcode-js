/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function(mat) {
  let res = 0, n = mat.length
  for(let i = 0; i < n; i++) {
    const j = i, ii = i, jj = n - 1 - i
    if(j == jj) res += mat[i][j]
    else {
      res += mat[i][j] + mat[ii][jj]
    }
  }
  
  return res
};
