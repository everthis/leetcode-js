/**
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var beautifulNumbers = function (l, r) {
  const toDigits = (n) => Array.from(String(n), Number)

  const countUpTo = (x) => (x < 0 ? 0n : dp(toDigits(x)))
  return Number(countUpTo(r) - countUpTo(l - 1))

  function dp(digits) {
    const n = digits.length

    const seen = new Map()

    function dfs(pos, tight, started, s, p, hasZero) {
      if (pos === n) {
        if (!started) return 0n
        return hasZero || (s !== 0 && p % s === 0) ? 1n : 0n
      }
      const key = state(pos, tight, started, s, p, hasZero)
      if (seen.has(key)) return seen.get(key)

      let ans = 0n
      const limit = tight ? digits[pos] : 9
      for (let d = 0; d <= limit; d++) {
        const newTight = tight && d === limit
        if (!started && d === 0) {
          ans += dfs(pos + 1, newTight, false, 0, 1, false)
        } else {
          const newStarted = true
          if (d === 0) {
            ans += dfs(pos + 1, newTight, newStarted, s + d, 0, true)
          } else {
            const newP = !started ? d : p * d
            ans += dfs(pos + 1, newTight, newStarted, s + d, newP, hasZero)
          }
        }
      }
      seen.set(key, ans)
      return ans
    }
    return dfs(0, true, false, 0, 1, false)
  }
}

function state(pos, tight, started, s, p, hasZero) {
    return `${pos},${tight},${started},${s},${p},${hasZero}`
}
/*
class State {
  constructor(pos, tight, started, s, p, hasZero) {
    this.pos = pos
    this.tight = tight
    this.started = started
    this.s = s
    this.p = p
    this.hasZero = hasZero
  }
}
*/

