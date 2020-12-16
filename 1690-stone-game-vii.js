/**
 * @param {number[]} stones
 * @return {number}
 */
const stoneGameVII = function (stones) {
  let len = stones.length
  const dp = Array.from({ length: len }, () => Array(len).fill(0))
  for (let i = len - 2; i >= 0; i--) {
    let sum = stones[i]
    for (let j = i + 1; j < len; j++) {
      sum += stones[j]
      dp[i][j] = Math.max(
        sum - stones[i] - dp[i + 1][j],
        sum - stones[j] - dp[i][j - 1]
      )
    }
  }
  return dp[0][len - 1]
}
