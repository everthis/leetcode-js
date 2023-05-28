/**
 * @param {string} s
 * @return {number}
 */
const minimumCost = function (s) {
  const n = s.length,
    { min } = Math
  let res = Infinity
  const dp = Array.from({ length: n + 1 }, () => Array(2).fill(0))
  const dp1 = Array.from({ length: n + 1 }, () => Array(2).fill(0))
  for (let i = 0; i < n; i++) {
    if (s[i] === '0') {
      dp[i + 1][0] = dp[i][0]
      dp[i + 1][1] = dp[i][0] + (i + 1)
    } else {
      dp[i + 1][0] = dp[i][1] + (i + 1)
      dp[i + 1][1] = dp[i][1]
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '0') {
      dp1[i][0] = dp1[i + 1][0]
      dp1[i][1] = dp1[i + 1][0] + (n - i)
    } else {
      dp1[i][0] = dp1[i + 1][1] + (n - i)
      dp1[i][1] = dp1[i + 1][1]
    }
  }
  for (let i = 0; i <= n; i++) {
    res = min(res, dp[i][0] + dp1[i][0], dp[i][1] + dp1[i][1])
  }
  return res
}
