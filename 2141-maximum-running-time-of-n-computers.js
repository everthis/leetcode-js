/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function (n, batteries) {
  batteries.sort((a, b) => a - b)
  const sum = batteries.reduce((ac, e) => ac + BigInt(e), 0n)
  let hi = ~~(sum / BigInt(n)) + 1n,
    lo = 0n
  while (lo < hi) {
    let mid = ~~((lo + hi) / 2n)
    if (chk(mid)) {
      lo = mid + 1n
    } else {
      hi = mid
    }
  }

  return lo - 1n
  function chk(x) {
    let current = 0n
    let i = 0n
    for (let b of batteries) {
      if (i == BigInt(n)) break
      if (b > x) b = x
      if (b >= x - current) {
        i += 1n
        current = BigInt(b) - (x - current)
      } else {
        current += BigInt(b)
      }
    }

    return i == n
  }
}
