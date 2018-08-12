/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = function(matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (r > 0 && c > 0 && matrix[r - 1][c - 1] !== matrix[r][c]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]));

console.log(isToeplitzMatrix([[1, 2], [2, 2]]));
