/**

Given a string s and an integer k, find out if the given string is a K-Palindrome or not.

A string is K-Palindrome if it can be transformed into a palindrome by removing at most k characters from it.

Example 1:

Input: s = "abcdeca", k = 2
Output: true
Explanation: Remove 'b' and 'e' characters.
 
Constraints:

1 <= s.length <= 1000
s has only lowercase English letters.
1 <= k <= s.length

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const isValidPalindrome = function(s, k) {
  const len = s.length
  const reverse = s.split('').reverse().join('')
  const lps = lcs(s, reverse, len, len)
  return len - lps <= k
  
};

function lcs(s1, s2, m, n) {
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if(s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[m][n]
}
