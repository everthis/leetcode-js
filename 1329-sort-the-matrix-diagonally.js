/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const diagonalSort = function(mat) {
  const m = mat.length, n = mat[0].length
  
  for(let j = 0; j < n; j++) {
    let i = 0, jj = j
    const tmp = []
    while(jj < n && i < m) {
      tmp.push(mat[i++][jj++])
    }
    tmp.sort((a, b) => a - b)
    let idx = 0
    jj = j
    let ii = 0
    while(ii < m && jj < n) {
      mat[ii++][jj++] = tmp[idx++]
    }
  }
    
  for(let i = 1; i < m; i++) {
    let j = 0
    let ii = i
    const tmp = []
    while(j < n && ii < m) {
      tmp.push(mat[ii++][j++])
    }
    tmp.sort((a, b) => a - b)
    let idx = 0
    ii = i
    j = 0
    while(ii < m && j < n) {
      mat[ii++][j++] = tmp[idx++]
    }
  }
  return mat
};
