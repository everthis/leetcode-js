/**
 * @param {number[]} A
 * @return {number}
 */
const lenLongestFibSubseq = function(A) {
  const n = A.length;
  let max = 0;
  const dp = Array(n).map(el => Array(n).fill(0));
  for (let i = 1; i < n; i++) {
    let l = 0,
      r = i - 1;
    while (l < r) {
      let sum = A[l] + A[r];
      if (sum > A[i]) {
        r--;
      } else if (sum < A[i]) {
        l++;
      } else {
        dp[r][i] = dp[l][r] + 1;
        max = Math.max(max, dp[r][i]);
        r--;
        l++;
      }
    }
  }
  return max == 0 ? 0 : max + 2;
};
