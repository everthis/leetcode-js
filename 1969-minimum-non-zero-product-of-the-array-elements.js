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
