/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = function(s) {
  const len = s.length
  const dp = Array.from({length: len + 1}, () => new Array(len + 1).fill(0))
  for(let i = len - 1; i >= 0; i--) {
    dp[i][i] = 1
    for(let j = i + 1; j < len; j++) {
      if(s[i] === s[j]) {
         dp[i][j] = dp[i+1][j-1] + 2
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i+1][j])
      }
    }
  }
  return dp[0][s.length - 1]
};
