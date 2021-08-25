/**
 * @param {number} p
 * @return {number}
 */
const minNonZeroProduct = function (p) {
  const MOD = BigInt(10 ** 9 + 7), bp = BigInt(p)
  const bpm = BigInt(1n << bp) - 1n, base = BigInt(1n << bp) - 2n, pow = BigInt(1n << (bp - 1n)) - 1n 
  return Number((bpm % MOD) * fastPow(base, pow, MOD) % MOD)

}

function fastPow(base, power, mod) {
  if(power === 0n) return 1n
  base %= mod
  let res = fastPow(base, power / 2n, mod)
  res = (res * res) % mod
  if(power & 1n) res = (res * base) % mod
  return res
}


// another


/**
 * @param {number} p
 * @return {number}
 */
const minNonZeroProduct = function (p) {
  const b = BigInt(p)
  const mod = BigInt(10 ** 9 + 7)

  return (
    (((BigInt(1n << b) - 1n) % mod) *
      pow(BigInt(1n << b) - 2n, BigInt(1n << (b - 1n)) - 1n)) %
    mod
  )

  function pow(a, n) {
    let r = 1n
    a %= mod
    while (n > 0n) {
      r = (r * a) % mod
      a = (a * a) % mod
      n /= 2n
    }
    return r
  }
}
