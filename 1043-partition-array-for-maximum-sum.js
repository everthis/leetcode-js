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

// another

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const maxSumAfterPartitioning = function(arr, k) {
  const n = arr.length, memo = Array(n + 1)
  memo[0] = 0
  return dp(n)
  
  function dp(i) {
    if(i === 0) return 0
    if(memo[i] != null) return memo[i]
    
    let sum = 0, max = 0, res = 0
    for(let j = i; j > 0 && i - j < k; j--) {
      max = Math.max(max, arr[j - 1])
      sum = (i - j + 1) * max
      res = Math.max(res, dp(j - 1) + sum)
    }
    return memo[i] = res
  }
};
