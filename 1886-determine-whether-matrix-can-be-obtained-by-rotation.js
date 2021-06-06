/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
const findRotation = function(mat, target) {
  if(chk(mat, target)) return true
  for(let i = 0; i < 3; i++) {
    rotate(mat)
    if(chk(mat, target)) return true
  }
  return false
};

function chk(m1, m2) {
  for(let i = 0; i < m1.length; i++) {
    for(let j = 0; j < m1.length; j++) {
      if(m1[i][j] !== m2[i][j]) return false
    }
  }
  return true
}

function rotate(matrix) {
  matrix.reverse()
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = matrix[i].length - 1; j > i; j--) swap(matrix, i, j)
  }
}

function swap(matrix, i, j) {
  const tmp = matrix[j][i]
  matrix[j][i] = matrix[i][j]
  matrix[i][j] = tmp
}
