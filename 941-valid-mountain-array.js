/**
 * @param {number[]} A
 * @return {boolean}
 */
const validMountainArray = function(A) {
  if (A.length < 3) return false;
  let start = 0;
  let end = A.length - 1;
  while (start < end) {
    while (A[end - 1] > A[end]) {
      end--;
    }
    while (A[start] < A[start + 1]) {
      start++;
    }
    if (start !== end || start === 0 || end === A.length - 1) return false;
  }
  return true;
};
