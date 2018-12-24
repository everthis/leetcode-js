/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
  if (matrix == null || matrix.length == 0) {
    return false;
  }

  const length = matrix.length;
  for (let i = 0; i < length; i++) {
    const row = matrix.shift();
    let left = 0,
      right = row.length - 1;

    while (left <= right) {
      const mid = left + parseInt((right - left) / 2);

      if (row[mid] == target) {
        return true;
      } else if (row[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return false;
};
