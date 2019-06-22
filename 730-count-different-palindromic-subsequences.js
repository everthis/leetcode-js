/**
 * @param {string} S
 * @return {number}
 */
const countPalindromicSubsequences = function(S) {
  const len = S.length
  const dp = Array.from({ length: len }, () => new Array(len).fill(0))
  const mod = 10 ** 9 + 7
  for (let i = 0; i < len; i++) dp[i][i] = 1
  for (let distance = 1; distance < len; distance++) {
    for (let i = 0; i < len - distance; i++) {
      let j = i + distance
      if (S[i] === S[j]) {
        let low = i + 1
        let high = j - 1
        while (low <= high && S[low] != S[j]) low++
        while (low <= high && S[high] != S[j]) high--
        if (low > high) {
          dp[i][j] = dp[i + 1][j - 1] * 2 + 2
        } else if (low == high) {
          dp[i][j] = dp[i + 1][j - 1] * 2 + 1
        } else {
          dp[i][j] = dp[i + 1][j - 1] * 2 - dp[low + 1][high - 1]
        }
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1]
      }
      dp[i][j] = dp[i][j] < 0 ? dp[i][j] + mod : dp[i][j] % mod
    }
  }
  return dp[0][len - 1]
}
