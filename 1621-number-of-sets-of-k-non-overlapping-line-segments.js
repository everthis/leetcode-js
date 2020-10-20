/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const numberOfSets = function (n, k) {
  let res = BigInt(1)
  const mod = BigInt(10 ** 9 + 7)
  for (let i = 1; i < k * 2 + 1; i++) {
    res = res * BigInt(n + k - i)
    res = res / BigInt(i)
  }
  res = res % mod
  return res
}

// another

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const numberOfSets = function (n, k) {
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0))
  const MOD = 10 ** 9 + 7
  for (let i = 2; i <= n; i++) {
    dp[i][i - 1] = 1
    dp[i][1] = (i * (i - 1)) / 2
  }
  for (let i = 4; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      let count =
        dp[i - 1][j] - dp[i - 2][j] + dp[i - 1][j] + dp[i - 1][j - 1] + MOD
      dp[i][j] = count % MOD
    }
  }
  return dp[n][k]
}
