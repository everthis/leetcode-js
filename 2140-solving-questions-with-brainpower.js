/**
 * @param {number[][]} questions
 * @return {number}
 */
const mostPoints = function(questions) {
  const n = questions.length, dp = Array(n + 1).fill(0)
  for (let i = n - 1; i >= 0; i--) {
    const [gain, p] = questions[i]
    dp[i] = Math.max(dp[i + 1], (dp[p + i + 1] || 0) + gain)
  }
  return dp[0]
};

// another

/**
 * @param {number[][]} questions
 * @return {number}
 */
const mostPoints = function (questions) {
  let n = questions.length
  const temp = Array(n).fill(0)

  temp[n - 1] = questions[n - 1][0]

  for (let i = n - 2; i >= 0; i--) {
    if (i + questions[i][1] + 1 <= n - 1)
      temp[i] = Math.max(
        temp[i + 1],
        questions[i][0] + temp[i + questions[i][1] + 1]
      )
    else temp[i] = Math.max(temp[i + 1], questions[i][0])
  }
  return temp[0]
}
