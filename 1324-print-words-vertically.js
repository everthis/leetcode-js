/**
 * @param {string} s
 * @return {string[]}
 */
const printVertically = function(s) {
  const arr = s.split(' ').filter(e => e !== '')
  const m = arr.length
  let n = 0
  for(const e of arr) {
    n = Math.max(n, e.length)
  }
    
  const mat = Array.from({ length: m }, () => Array(n).fill(' '))
  for(let i = 0; i < arr.length; i++) {
    const cur = mat[i]
    for(let j = 0; j < arr[i].length; j++) {
        mat[i][j] = arr[i][j]
    }
  }
  const res = []
  for(let j = 0; j < n; j++) {
      const col = []
      for(let i = 0; i < m; i++) {
          col.push(mat[i][j])
      }
      res.push(col.join('').trimEnd())
  }
  
  return res
};
