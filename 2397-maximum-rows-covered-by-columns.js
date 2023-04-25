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
    const set = new Set()
    for(let i = 0; i < n; i++) {
      if(mask & (1 << i)) {
        set.add(n - 1 - i)
      }
    }
    let num = 0
    for(let i = 0; i < m; i++) {
      let mark = true
      for(let j = 0; j < n; j++) {
        if(matrix[i][j] === 1 && !set.has(j)) {
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
