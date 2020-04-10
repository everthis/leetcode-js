/**
 * @param {number} N
 * @return {number}
 */
const maxA = function (N) {
  const dp = [0, 1, 2, 3, 4, 5, 6]
  const recurse = function (n) {
    if (dp[n]) return dp[n]
    const max = Math.max(
      recurse(n - 3) * 2,
      recurse(n - 4) * 3,
      recurse(n - 5) * 4
    )
    return (dp[n] = max)
  }
  return recurse(N)
}

// another

/**
 * @param {number} N
 * @return {number}
 */
const maxA = function (N) {
  const dp = [...new Array(N + 1)].map((_, i) => i)
  for (let i = 4; i <= N; i++) {
    for (let j = 1; j <= i - 3; j++) {
      dp[i] = Math.max(dp[i], dp[j] * (i - j - 1))
    }
  }
  return dp[N]
}

// another

/**
 * @param {number} N
 * @return {number}
 */
const maxA = function (N) {
  const dp = new Array(7).fill(0)
  for (let i = 1; i <= N; i++) {
    dp[0] = i
    for (let k = 6; k > 2; k--) {
      dp[0] = Math.max(dp[0], dp[k] * (k - 1))
    }
    for (let k = 6; k > 0; k--) {
      dp[k] = dp[k - 1]
    }
  }
  return dp[0]
}

