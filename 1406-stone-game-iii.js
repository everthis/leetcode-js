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

// another

/**
 * @param {number[]} stoneValue
 * @return {string}
 */
const stoneGameIII = function (stoneValue) {
  const n = stoneValue.length,
    dp = new Array(4).fill(0)
  for (let i = n - 1; i >= 0; --i) {
    dp[i % 4] = -Infinity
    for (let k = 0, take = 0; k < 3 && i + k < n; ++k) {
      take += stoneValue[i + k]
      dp[i % 4] = Math.max(dp[i % 4], take - dp[(i + k + 1) % 4])
    }
  }
  if (dp[0] > 0) return 'Alice'
  if (dp[0] < 0) return 'Bob'
  return 'Tie'
}
