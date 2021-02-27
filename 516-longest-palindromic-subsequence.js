// 区间DP

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = function(s) {
  const n = s.length
  const dp = Array.from({ length: n }, () => Array(n).fill(0))
  for(let i = 0; i < n; i++) dp[i][i] = 1
  for(let len = 2; len <= n; len++) {
    for(let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1
      if(s[i] === s[j]) dp[i][j] = 2 + dp[i + 1][j - 1]
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
    }
  }
  return dp[0][n - 1]
};

// another

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = function(s) {
  const n = s.length
  const dp = Array.from({ length: n }, () => Array(n).fill(0))
  for(let i = 0; i < n; i++) {
    dp[i][i] = 1
    for(let j = i - 1; j >= 0; j--) {
      if(s[i] === s[j]) {
        dp[i][j] = dp[i - 1][j + 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j + 1])
      }
    }
  }
  
  return dp[n - 1][0]
};

// another

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
