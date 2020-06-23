/**
 * @param {string} s
 * @return {number}
 */
const minInsertions = function (s) {
  const dp = [...Array(501)].map((x) => Array(501).fill(0))
  const N = s.length
  for (let i = N - 1; i >= 0; --i)
    for (let j = i + 1; j <= N; ++j)
      if (s[i] == s[j - 1]) dp[i][j] = dp[i + 1][j - 1]
      else dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j - 1])
  return dp[0][N]
}
