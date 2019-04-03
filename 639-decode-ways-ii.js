/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function(s) {
  const mod = Math.pow(10, 9) + 7
  const dp = [1, s.charAt(0) === '*' ? 9 : s.charAt(0) === '0' ? 0 : 1]
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '*') {
      if (s.charAt(i - 1) === '*') {
        dp[i + 1] = 9 * dp[i] + 15 * dp[i - 1]
      } else if (s.charAt(i - 1) === '1') {
        dp[i + 1] = 9 * dp[i] + 9 * dp[i - 1]
      } else if (s.charAt(i - 1) === '2') {
        dp[i + 1] = 9 * dp[i] + 6 * dp[i - 1]
      } else {
        dp[i + 1] = dp[i] * 9
      }
    } else {
      let mul = s.charAt(i) === '0' ? 0 : 1
      if (s.charAt(i - 1) === '*') {
        dp[i + 1] = mul * dp[i] + (s.charAt(i) <= '6' ? 2 : 1) * dp[i - 1]
      } else if (
        s.charAt(i - 1) === '1' ||
        (s.charAt(i - 1) === '2' && s.charAt(i) <= '6')
      ) {
        dp[i + 1] = mul * dp[i] + dp[i - 1]
      } else {
        dp[i + 1] = mul * dp[i]
      }
    }
    dp[i + 1] = dp[i + 1] % mod
  }
  return dp[dp.length - 1]
}
