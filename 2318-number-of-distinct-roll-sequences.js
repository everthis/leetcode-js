/**
 * @param {number} n
 * @return {number}
 */
const dp = MultidimensionalArray(0, 1e4 + 1, 7, 7)
const distinctSequences = function (n, p = 0, pp = 0) {
  const mod = 1e9 + 7
  if (n === 0) return 1
  if (dp[n][p][pp] === 0) {
    for (let d = 1; d < 7; d++) {
      if (d !== p && d !== pp && (p === 0 || gcd(d, p) === 1)) {
        dp[n][p][pp] = (dp[n][p][pp] + distinctSequences(n - 1, d, p)) % mod
      }
    }
  }

  return dp[n][p][pp]
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

function MultidimensionalArray(defaultValue, ...args) {
  if (args.length === 1) {
    return Array(args[0]).fill(defaultValue)
  }
  const res = []

  for (let i = 0, n = args[0]; i < n; i++) {
    res.push(MultidimensionalArray(defaultValue, ...args.slice(1)))
  }

  return res
}
