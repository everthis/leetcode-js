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
  // dp[i][k] as: the number of ways to generate
  // k non-overlapping segments you can make using [0 ~ i].
  const dp = Array.from({ length: n }, () => Array(k + 1).fill(0))
  const MOD = 10 ** 9 + 7
  dp[1][1] = 1
  for (let i = 2; i < n; i++) dp[i][1] = ((i + 1) * i) / 2
  // sum[i][j] as: the number of ways to generate
  // j - 1 segments from i - 1 points.
  const sum = Array.from({ length: n }, () => Array(k + 1).fill(0))
  for (let i = 2; i < n; i++) {
    for (let j = 2; j <= k; j++) {
      if (j <= i) sum[i][j] = (sum[i - 1][j] + dp[i - 1][j - 1]) % MOD
      dp[i][j] = (sum[i][j] + dp[i - 1][j]) % MOD
    }
  }
  return dp[n - 1][k]
}

