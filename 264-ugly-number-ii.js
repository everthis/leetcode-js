/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function(n) {
  const dp = [1]
  let [a, b, c] = [0, 0, 0]
  for (let i = 1; i < n; i++) {
    let [ua, ub, uc] = [dp[a] * 2, dp[b] * 3, dp[c] * 5]
    dp[i] = Math.min(ua, ub, uc)
    if (dp[i] === ua) a++
    if (dp[i] === ub) b++
    if (dp[i] === uc) c++
  }
  return dp[n - 1]
}
