/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers  = function(matrix) {
  const m = matrix.length, n = matrix[0].length
  const res = []
  for(let i = 0; i < m; i++) {
    let tmp = [i, 0, matrix[i][0]]
    for(let j = 1; j < n; j++) {
      if(matrix[i][j] < tmp[2]) {
        tmp = [i, j, matrix[i][j]]
      }
    }
    res.push(tmp)
  }
  
  const ans = []
  for(let [r, c, v] of res) {
    let found = false
    for(let i = 0; i < m; i++) {
      if(i !== r && matrix[i][c] > v) {
        found = true
        break
      }
    }
    
    if(found === false) ans.push(v)
  } 
  
  return ans
};
