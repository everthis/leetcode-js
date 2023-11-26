/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
  const m = mat.length, n = mat[0].length
  const clone = Array.from({ length: m }, () => Array(n).fill(null))
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      clone[i][j] = mat[i][j]
    }
  }
  for(let i = 0; i < m; i++) {
    const odd = i % 2 === 1
    if(odd) {
      sr(clone, i)
    } else {
      sl(clone, i)
    }
  }
  // console.log(clone)
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(mat[i][j] !== clone[i][j]) return false
    }
  }
  
  
  return true
  
  function sr(mat, i) {
    const row = mat[i]
    const idx = k % n
    mat[i] = row.slice(n - idx).concat(row.slice(0, n - idx)) 
  }
  function sl(mat, i) {
    const row = mat[i]
    const idx = k % n
    mat[i] = row.slice(idx, n).concat(row.slice(0, idx)) 
  }
};
