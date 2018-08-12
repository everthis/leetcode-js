/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function(nums, r, c) {
  if (isValid(nums, r, c) === false) {
    return nums;
  }
  const arr = [];
  nums.forEach(el => arr.push(...el));
  const res = [];
  for (let start = 0; start < arr.length; start = start + c) {
    res.push(arr.slice(start, start + c));
  }
  return res;
};

function isValid(matrix, r, c) {
  if (matrix.length * matrix[0].length !== r * c) {
    return false;
  } else {
    return true;
  }
}

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4));
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4));
