/**
 * @param {number[]} A
 * @return {number[]}
 */
const prevPermOpt1 = function(A) {
  let n = A.length, left = n - 2, right = n - 1;
  while (left >= 0  && A[left] <= A[left + 1]) left--;
  if (left < 0) return A;
  while (A[left] <= A[right]) right--;
  while (A[right - 1] == A[right]) right--;
  swap(A,left,right)
  return A;
};
function swap(a, i, j) {
  let tmp = a[i]
  a[i] = a[j]
  a[j] = tmp
}
