/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

const findMedianSortedArrays = function(A, B) {
  let m = A.length,
    n = B.length;

  if (m > n) {
    return findMedianSortedArrays(B, A);
  }

  let imin = 0,
    imax = m,
    i,
    j;
  while (imin <= imax) {
    i = (imin + imax) >> 1;
    j = ((m + n + 1) >> 1) - i;
    if (j > 0 && i < m && B[j - 1] > A[i]) {
      imin = i + 1;
    } else if (i > 0 && j < n && A[i - 1] > B[j]) {
      imax = i - 1;
    } else {
      if (i === 0) {
        num1 = B[j - 1];
      } else if (j === 0) {
        num1 = A[i - 1];
      } else {
        num1 = Math.max(A[i - 1], B[j - 1]);
      }

      if ((m + n) & 1) {
        return num1;
      }

      if (i === m) {
        num2 = B[j];
      } else if (j === n) {
        num2 = A[i];
      } else {
        num2 = Math.min(A[i], B[j]);
      }
      return (num1 + num2) / 2.0;
    }
  }
};
