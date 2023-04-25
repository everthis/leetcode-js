/**
 * @param {number[][]} matrix
 * @param {number} numSelect
 * @return {number}
 */
const maximumRows = function(matrix, numSelect) {
  const m = matrix.length, n = matrix[0].length
  const limit = 1 << n
  
  let res = 0
  
  for(let mask = 1; mask < limit; mask++) {
    if(bitCnt(mask) > numSelect) continue
    let num = 0
    for(let i = 0; i < m; i++) {
      let mark = true
      for(let j = n - 1; j >= 0; j--) {
        if(matrix[i][j] === 1 && (mask & (1 << j)) === 0) {
          mark = false
          break
        }
      }
      if(mark) num++
    }
    res = Math.max(res, num)
  }
  
  return res
  
  function bitCnt(num) {
    let res = 0
    while(num) {
      num = num & (num - 1)
      res++
    }
    return res
  }
};
