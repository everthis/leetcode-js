/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
  const arr= []
  const m = mat.length, n = mat[0].length
  let ma = 0
  for(let i = 0; i < m; i++) {
    let cnt = 0
    for(let j = 0; j < n; j++) {
      if(mat[i][j] === 1) cnt++
    }
    arr[i] = cnt
    ma = Math.max(ma, cnt)
  }
  
  for(let i = 0; i < m; i++) {
    if(arr[i] === ma) return [i, ma]
  }
};
