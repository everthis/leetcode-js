/**
 * @param {number} primeFactors
 * @return {number}
 */
const MOD = BigInt(1e9 + 7)
const maxNiceDivisors = (pf) => {
  if (pf == 1) return 1
  let bpf = BigInt(pf)
  let res
  if (pf % 3 == 0) {
    res = powmod(3n, bpf / 3n, MOD)
  } else if (pf % 3 == 1) {
    res = (powmod(3n, bpf / 3n - 1n, MOD) * 4n) % MOD
  } else {
    res = (powmod(3n, bpf / 3n, MOD) * 2n) % MOD
  }
  return Number(res)
}

const powmod = (a, b, mod) => {
  let r = 1n
  while (b > 0n) {
    if (b % 2n == 1) r = (r * a) % mod
    b >>= 1n
    a = (a * a) % mod
  }
  return r
}
