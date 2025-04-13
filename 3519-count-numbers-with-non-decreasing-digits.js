/**
 * @param {string} l
 * @param {string} r
 * @param {number} b
 * @return {number}
 */
var countNumbers = function (l, r, b) {
  const mod = 1000000007

  const bigL = BigInt(l)
  const bigR = BigInt(r)

  const rightCnt = helper(bigR, b)
  const leftCnt = helper(bigL - 1n, b)
  const ans = (rightCnt - leftCnt + BigInt(mod)) % BigInt(mod)
  return Number(ans)
  function helper(num, b) {
    if (num < 0n) return 0n

    // b base digits
    const digits = Array.from(num.toString(b)).map((d) => BigInt(d) - 0n)
    const n = digits.length

    const seen = new Map()

    function dfs(pos, last, started, tight) {
      if (pos === n) return 1n

      const key = `${pos}, ${last}, ${started}, ${tight}`
      if (seen.has(key)) return seen.get(key)

      const limit = tight ? digits[pos] : BigInt(b - 1)
      let ways = 0n

      for (let d = 0n; d <= limit; d++) {
        if (started && d < last) continue

        const nextStarted = started || d !== 0n
        const nextLast = started || d !== 0n ? d : last

        const nextTight = tight && d === limit
        ways =
          (ways + dfs(pos + 1, nextLast, nextStarted, nextTight)) % BigInt(mod)
      }
      seen.set(key, ways % BigInt(mod))
      return ways
    }

    return dfs(0, 0n, false, true)
  }
}
