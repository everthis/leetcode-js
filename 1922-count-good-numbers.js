/**
 * @param {number} n
 * @return {number}
 */
const countGoodNumbers = function (n) {
  n = BigInt(n)
  const MOD = BigInt(10 ** 9 + 7)
  let res =
    quick_pow(5n, (n + 1n) / 2n ) * quick_pow(4n, n / 2n)
  res %= MOD
  return res

  function quick_pow(b, m) {
    let ans = 1n
    while (m) {
      if (m % 2n === 1n) ans = (ans * b) % MOD
      m = m / 2n
      b = (b * b) % MOD
    }
    return ans
  }
}

