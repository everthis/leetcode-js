/**
 * @param {number[][]} matrix
 */
const NumMatrix = function(matrix) {
  this.matrix = matrix
  if (matrix.length === 0) {
    this.sums = []
  } else {
    this.sums = new Array(matrix.length + 1)
      .fill()
      .map(() => new Array(matrix[0].length + 1).fill(0))
  }
  this.insert = (i, j, diff) => {
    for (let n = i; n < this.sums.length; n += n & -n) {
      for (let m = j; m < this.sums[n].length; m += m & -m) {
        this.sums[n][m] += diff
      }
    }
  }
  this.search = (i, j) => {
    let sum = 0
    for (let n = i; n > 0; n -= n & -n) {
      for (let m = j; m > 0; m -= m & -m) {
        sum += this.sums[n][m]
      }
    }
    return sum
  }
  for (let n = 0; n < matrix.length; n++) {
    for (let m = 0; m < matrix[n].length; m++) {
      this.insert(n + 1, m + 1, matrix[n][m])
    }
  }
}

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
  this.insert(row + 1, col + 1, val - this.matrix[row][col])
  this.matrix[row][col] = val
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return (
    this.search(row2 + 1, col2 + 1) -
    this.search(row1, col2 + 1) -
    this.search(row2 + 1, col1) +
    this.search(row1, col1)
  )
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */
