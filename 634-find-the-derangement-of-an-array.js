/**
 * @param {number} n
 * @return {number}
 */
const findDerangement = function (n) {
  if ([0, 1].includes(n)) return 0
  if (n === 2) return 1
  let prev = 1
  const MOD = 10 ** 9 + 7
  let result = 0
  for (let i = 3; i <= n; i++) {
    result = (prev * i + (i % 2 === 1 ? -1 : 1)) % MOD
    prev = result
  }
  return result
}

// another

/**
 * @param {number} n
 * @return {number}
 */
const findDerangement = function (n) {
  if (n === 0) return 0
  const MOD = 10 ** 9 + 7
  const dp = [1, 0]
  for (let i = 2; i <= n; i++) {
    dp[i] = ((i - 1) * (dp[i - 2] + dp[i - 1])) % MOD
  }
  return dp[n]
}

