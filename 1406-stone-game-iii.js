/**
 * @param {number[]} stoneValue
 * @return {string}
 */
const stoneGameIII = function (stoneValue) {
  const n = stoneValue.length
  const suffixSum = new Array(n + 1)
  const dp = new Array(n + 1)
  suffixSum[n] = 0
  dp[n] = 0
  for (let i = n - 1; i >= 0; i--)
    suffixSum[i] = suffixSum[i + 1] + stoneValue[i]
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = stoneValue[i] + suffixSum[i + 1] - dp[i + 1]
    for (let k = i + 1; k < i + 3 && k < n; k++) {
      dp[i] = Math.max(dp[i], suffixSum[i] - dp[k + 1])
    }
  }
  if (dp[0] * 2 === suffixSum[0]) return 'Tie'
  else if (dp[0] * 2 > suffixSum[0]) return 'Alice'
  else return 'Bob'
}
