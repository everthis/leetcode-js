/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfGoodSubsets = function (nums) {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  const n = nums.length,
    cnt = {},
    mod = BigInt(1e9 + 7)
  const bm = []
  for (let num of nums) {
    cnt[num] = (cnt[num] || 0n) + 1n
  }
  for (let i = 0; i < 31; i++) {
    let tmp = 0
    for (let j = 0, m = primes.length; j < m; j++) {
      const p = primes[j]
      if (i % p === 0) tmp += 1 << j
    }
    bm[i] = tmp
  }
  const bad = new Set([4, 8, 9, 12, 16, 18, 20, 24, 25, 27, 28])
  const memo = {}

  function dp(mask, num) {
    if (num === 1) return 1n
    if (memo[mask] && memo[mask][num] != null) return memo[mask][num]
    let res = dp(mask, num - 1)
    if (!bad.has(num) && (mask | bm[num]) === mask) {
      res += dp(mask ^ bm[num], num - 1) * (cnt[num] || 0n)
    }
    if (memo[mask] == null) memo[mask] = {}
    return (memo[mask][num] = res % mod)
  }

  return ((dp(1023, 30) - 1n) * pow(2n, cnt[1] || 0n, mod)) % mod
}

function pow(base, exp, mod) {
  if (exp === 0n) return 1n
  // console.log(base, mod)
  base %= mod
  let res = pow(base, exp / 2n, mod)
  res = (res * res) % mod
  if (exp & 1n) res = (res * base) % mod
  return res
}
/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfGoodSubsets = function (nums) {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  const n = nums.length,
    cnt = {},
    mod = BigInt(1e9 + 7)
  const bm = []
  for (let num of nums) {
    cnt[num] = (cnt[num] || 0n) + 1n
  }
  for (let i = 0; i < 31; i++) {
    let tmp = 0
    for (let j = 0, m = primes.length; j < m; j++) {
      const p = primes[j]
      if (i % p === 0) tmp += 1 << j
    }
    bm[i] = tmp
  }
  const bad = new Set([4, 8, 9, 12, 16, 18, 20, 24, 25, 27, 28])
  const memo = {}

  function dp(mask, num) {
    if (num === 1) return 1n
    if (memo[mask] && memo[mask][num] != null) return memo[mask][num]
    let res = dp(mask, num - 1)
    if (!bad.has(num) && (mask | bm[num]) === mask) {
      res += dp(mask ^ bm[num], num - 1) * (cnt[num] || 0n)
    }
    if (memo[mask] == null) memo[mask] = {}
    return (memo[mask][num] = res % mod)
  }

  return ((dp(1023, 30) - 1n) * pow(2n, cnt[1] || 0n, mod)) % mod
}

function pow(base, exp, mod) {
  if (exp === 0n) return 1n
  // console.log(base, mod)
  base %= mod
  let res = pow(base, exp / 2n, mod)
  res = (res * res) % mod
  if (exp & 1n) res = (res * base) % mod
  return res
}
