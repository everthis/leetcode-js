/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
  const n = matrix.length
  let res = true
  for(let i = 0; i < n; i++) {
    if(!chkRow(i) || !chkCol(i)) {
      res = false
      break
    }
  }
  
  
  return res
  
  function chkRow(i) {
    const row = matrix[i], set = new Set()
    for(let i = 0; i < n; i++) {
      set.add(row[i])
    }
    return set.size === n
  }
  
  function chkCol(j) {
    const set = new Set()
    for(let i = 0; i < n; i++) {
      set.add(matrix[i][j])
    }
    
    return set.size === n
  }
};
