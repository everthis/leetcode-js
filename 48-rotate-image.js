/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
  let s = 0,
    e = matrix.length - 1
  while (s < e) {
    let temp = matrix[s]
    matrix[s] = matrix[e]
    matrix[e] = temp
    s++
    e--
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
}

// another

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  matrix.reverse()
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = i + 1; j < matrix[i].length; ++j) swap(matrix, i, j)
  }
}

function swap(matrix, i, j) {
  const tmp = matrix[j][i]
  matrix[j][i] = matrix[i][j]
  matrix[i][j] = tmp
}

// another

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
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
/*
1 2 3      7 8 9     7 4 1
4 5 6 ---> 4 5 6 --->8 5 2
7 8 9      1 2 3     9 6 3
*/
