/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
const numWays = function (steps, arrLen) {
  const MOD = 10 ** 9 + 7
  const memo = Array.from({ length: (steps >> 1) + 1 }, () =>
    Array(steps + 1).fill(-1)
  )
  return dp(0, steps)
  function dp(i, steps) {
    if (steps === 0 && i === 0) return 1
    if (i < 0 || i >= arrLen || steps === 0 || i > steps) return 0
    if (memo[i][steps] !== -1) return memo[i][steps]
    return (memo[i][steps] =
      ((dp(i + 1, steps - 1) % MOD) +
        (dp(i - 1, steps - 1) % MOD) +
        (dp(i, steps - 1) % MOD)) %
      MOD)
  }
}
