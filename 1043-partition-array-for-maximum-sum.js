/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const maxSumAfterPartitioning = function(A, K) {
  const N = A.length
  const dp = new Array(N).fill(0);
  for (let i = 0; i < N; ++i) {
    let curMax = 0;
    for (let j = 1; j <= K && i - j + 1 >= 0; j++) {
      curMax = Math.max(curMax, A[i - j + 1]);
      dp[i] = Math.max(dp[i], (i >= j ? dp[i - j] : 0) + curMax * j);
    }
  }
  return dp[N - 1];
};
