/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
const ways = function (pizza, K) {
  const MOD = 1e9 + 7
  const M = pizza.length
  const N = pizza[0].length
  const count = Array(M + 1)
    .fill(0)
    .map(() => Array(N + 1).fill(0))
  for (let i = M - 1; i >= 0; i--) {
    let rowCount = 0
    for (let j = N - 1; j >= 0; j--) {
      rowCount += pizza[i][j] === 'A' ? 1 : 0
      count[i][j] = count[i + 1][j] + rowCount
    }
  }
  const dp = Array(M)
    .fill(0)
    .map(() =>
      Array(N)
        .fill(0)
        .map(() => Array(K + 1).fill(0))
    )
  for (let i = M - 1; i >= 0; i--) {
    for (let j = N - 1; j >= 0; j--) {
      dp[i][j][1] = 1
      for (let k = 2; k <= K; k++) {
        for (let t = i + 1; t < M; t++) {
          if (count[i][j] === count[t][j]) continue
          if (count[t][j] === 0) break
          dp[i][j][k] = (dp[i][j][k] + dp[t][j][k - 1]) % MOD
        }
        for (let t = j + 1; t < N; t++) {
          if (count[i][j] === count[i][t]) continue
          if (count[i][t] === 0) break
          dp[i][j][k] = (dp[i][j][k] + dp[i][t][k - 1]) % MOD
        }
      }
    }
  }
  return dp[0][0][K]
}
