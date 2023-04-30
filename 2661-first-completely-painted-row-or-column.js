/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
const firstCompleteIndex = function(arr, mat) {
  const map = new Map()
  const m = mat.length, n = mat[0].length
  
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      map.set(mat[i][j], [i, j])
    }
  }
  
  const rows = Array(m).fill(0)
  const cols = Array(n).fill(0)
  
  for(let i = 0; i < m * n; i++) {
    const e = arr[i]
    const [r, c] = map.get(e)
    rows[r]++
    cols[c]++
    // console.log(r, c, rows, cols, m, n)
    if(rows[r] === n) return i
    if(cols[c] === m) return i
  }
  
};
