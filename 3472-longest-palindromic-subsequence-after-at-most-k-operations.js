/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestPalindromicSubsequence = function (s, k) {
  const n = s.length
  const dp = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Array(k + 1).fill(-1)),
  )

  function cost(a, b) {
    const diff = Math.abs(a.charCodeAt(0) - b.charCodeAt(0))
    return Math.min(diff, 26 - diff)
  }

  function dfs(i, j, rem) {
    if (i > j) return 0
    if (i === j) return 1
    if (dp[i][j][rem] !== -1) return dp[i][j][rem]

    let res = Math.max(dfs(i + 1, j, rem), dfs(i, j - 1, rem))
    const c = cost(s[i], s[j])
    if (c <= rem) {
      res = Math.max(res, 2 + dfs(i + 1, j - 1, rem - c))
    }
    dp[i][j][rem] = res
    return res
  }

  return dfs(0, n - 1, k)
}
