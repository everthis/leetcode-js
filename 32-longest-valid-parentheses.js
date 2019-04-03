/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function(s) {
  const arr = s.split("")
  const dp = new Array(arr.length).fill(0)
  let open = 0
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") open++
    if (arr[i] === ")" && open > 0) {
      dp[i] = 2 + dp[i - 1]
      if (i - dp[i] > 0) dp[i] += dp[i - dp[i]]
      open--
    }
    if (dp[i] > max) max = dp[i]
  }
  return max
}
