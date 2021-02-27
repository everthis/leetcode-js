/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const longestPalindrome = function(word1, word2) {
  const str = word1 + word2
  const len = str.length, m = word1.length, n = word2.length
  const dp = LPS(str)
  let res = 0
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(word1[i] !== word2[j]) continue
      res = Math.max(res, 2 + dp[i + 1][j + m - 1])
    }
  }
  return res
}

function LPS(str) {
  const n = str.length
  const dp = Array.from({ length: n }, () => Array(n).fill(0))
  for(let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1
    for(let j = i + 1; j < n; j++) {
      if(str[i] === str[j]) dp[i][j] = 2 + dp[i + 1][j - 1]
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
    }
  }
  return dp
}


// another

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const longestPalindrome = function(word1, word2) {
    const sz = word1.length + word2.length
    let res = 0;
    const dp = Array.from({ length: sz + 1 }, () => Array(sz + 1).fill(0))
    longestPalindromeSubseq(word1 + word2, dp);
    for (let i = 0; i < word1.length; ++i)
        for (let j = word2.length - 1; j >= 0; --j)
            if (word1[i] == word2[j]) {
                res = Math.max(res, dp[i][word1.length + j + 1]);
                break;
            }
    return res;

}
function longestPalindromeSubseq( s, dp) {
    for (let len = 1; len <= s.length; ++len) 
        for (let i = 0; i + len <= s.length; ++i) 
            dp[i][i + len] = s[i] == s[i + len - 1] ? 
                dp[i + 1][i + len - 1] + (len == 1 ? 1 : 2) : 
                    Math.max(dp[i][i + len - 1],  dp[i + 1][i + len]);
    return dp[0][s.length];
}    


