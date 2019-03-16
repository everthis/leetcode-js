/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function(A) {
  const result = [];
  let i = A.length - 1;
  let left = 0;
  let right = A.length -1;
  while (left <= right) {
    if (Math.abs(A[left]) < A[right]) {
      result.unshift(A[right] * A[right])
      right--;
    } else {
      result.unshift(A[left] * A[left])
      left++
    }
  }
  return result;
};
