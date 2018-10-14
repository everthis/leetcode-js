/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const findLength = function(A, B) {
  let ans = 0;
  let memo = [];
  for (let i = 0; i < A.length + 1; i++) {
    memo[i] = Array(B.length + 1).fill(0);
  }
  for (let i = A.length - 1; i >= 0; --i) {
    for (let j = B.length - 1; j >= 0; --j) {
      if (A[i] == B[j]) {
        memo[i][j] = memo[i + 1][j + 1] + 1;
        if (ans < memo[i][j]) ans = memo[i][j];
      }
    }
  }
  return ans;
};
