/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const minimumPartition = function(s, k) {
  const n = s.length, m = `${k}`.length
  const dp = Array(n + 1).fill(0)
  for(let i = 0; i < n; i++) {
    if(m === 1 && +s[i] > k) return -1
  }
  s = '#' + s
  for(let i = 1; i <= n; i++) {
    if(i - m + 1 > 0 && s.slice(i - m + 1, i + 1) <= k) {
      dp[i] = dp[i - m] + 1
    } else {
      dp[i] = dp[Math.max(0, i - m + 1)] + 1
    }
  }
  
  return dp[n]
};
