/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
    const rows = matrix.length
    const cols = (matrix[0] || []).length
    const r = chkRow(matrix, rows, cols, target)
    if(r === -1) return false
    for(let i = 0; i < cols; i++) {
      if(matrix[r][i] === target) return true
    }
    return false
};

function chkRow(matrix, rows, cols, target) {
  if(cols <= 0) return -1
  for(let i = 0; i < rows; i++) {
    if(target <= matrix[i][cols - 1]) return i
  }
  return -1
}
