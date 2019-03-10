/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumAfterKNegations = function(A, K) {
  if (A.length === 0) return 0;
  A.sort((a, b) => a - b);
  let res = 0;
  let posIdx;
  for (let i = 0, num = 0; i < A.length; i++) {
    if (num < K) {
      if (A[i] < 0) {
        A[i] = -A[i];
      } else {
        if (posIdx == null) {
          posIdx = Math.abs(A[i]) - Math.abs(A[i - 1]) > 0 ? i - 1 : i;
        }
        A[posIdx] = -A[posIdx];
      }
      num++;
    }
  }
  res = A.reduce((ac, el) => ac + el, 0);
  return res;
};
