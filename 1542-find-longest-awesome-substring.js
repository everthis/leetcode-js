/**
 * @param {string} s
 * @return {number}
 */
const longestAwesome = function (s) {
  const dp = new Array(1024).fill(s.length)
  let res = 0,
    mask = 0
  dp[0] = -1
  for (let i = 0; i < s.length; ++i) {
    mask ^= 1 << +s.charAt(i)
    res = Math.max(res, i - dp[mask])
    for (let j = 0; j <= 9; ++j) res = Math.max(res, i - dp[mask ^ (1 << j)])
    dp[mask] = Math.min(dp[mask], i)
  }
  return res
}
