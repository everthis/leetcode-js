/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDiagonalOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return []
  }
  const m = matrix.length
  const n = matrix[0].length
  const output = []
  for (let sum = 0; sum <= m + n - 2; sum++) {
    for (
      let i = Math.min(m - 1, sum);
      sum % 2 === 0 && isValid(i, sum - i, m, n);
      i--
    ) {
      const j = sum - i
      output.push(matrix[i][j])
    }
    for (
      let j = Math.min(n - 1, sum);
      sum % 2 === 1 && isValid(sum - j, j, m, n);
      j--
    ) {
      const i = sum - j
      output.push(matrix[i][j])
    }
  }
  return output
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false
  }
  return true
}

// another

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDiagonalOrder = function(matrix) {
  if (matrix.length == 0) return []
  let r = 0,
    c = 0,
    m = matrix.length,
    n = matrix[0].length,
    arr = new Array(m * n)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = matrix[r][c]
    if ((r + c) % 2 === 0) {
      // moving up
      if (c === n - 1) {
        r++
      } else if (r === 0) {
        c++
      } else {
        r--
        c++
      }
    } else {
      // moving down
      if (r === m - 1) {
        c++
      } else if (c === 0) {
        r++
      } else {
        r++
        c--
      }
    }
  }
  return arr
}



