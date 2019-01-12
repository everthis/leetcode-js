/**
 * @param {number[][]} matrix
 */
const NumMatrix = function(matrix) {
  const dp = [];
  if (matrix.length == 0 || matrix[0].length == 0) return;
  for (let i = 0; i <= matrix.length; i++) {
    let t = new Array(matrix[0].length + 1).fill(0);
    dp.push(t);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      dp[i + 1][j + 1] = dp[i][j + 1] + dp[i + 1][j] + matrix[i][j] - dp[i][j];
    }
  }

  this.cache = dp;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  const dp = this.cache;
  return (
    dp[row2 + 1][col2 + 1] -
    dp[row1][col2 + 1] -
    dp[row2 + 1][col1] +
    dp[row1][col1]
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
