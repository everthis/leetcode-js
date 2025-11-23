/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function (s, queries) {
  const MOD = 1_000_000_007n
  const n = s.length

  const idx = new Array(n + 1).fill(0)
  const val = new Array(n + 1).fill(0n)
  const tot = new Array(n + 1).fill(0n)
  const pow10 = new Array(n + 1).fill(0n)

  pow10[0] = 1n
  for (let i = 1; i <= n; i++) {
    pow10[i] = (pow10[i - 1] * 10n) % MOD
  }

  let c = 0

  for (let i = 0; i < n; i++) {
    const d = BigInt(s.charCodeAt(i) - '0'.charCodeAt(0))
    if (d !== 0n) {
      c++
      val[c] = (val[c - 1] * 10n + d) % MOD
      tot[c] = tot[c - 1] + d
    }
    idx[i + 1] = c
  }

  const m = queries.length
  const res = new Array(m)

  for (let i = 0; i < m; i++) {
    const l = queries[i][0]
    const r = queries[i][1]

    const a = idx[l]
    const b = idx[r + 1]

    if (a === b) {
      res[i] = 0
      continue
    }

    const len = b - a

    const num = (val[b] - ((val[a] * pow10[len]) % MOD) + MOD) % MOD
    const sumDigits = tot[b] - tot[a]

    res[i] = Number((num * sumDigits) % MOD)
  }

  return res
}
