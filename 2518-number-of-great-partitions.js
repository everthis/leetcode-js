const ll = BigInt,
  mod = 1e9 + 7,
  bmod = ll(mod)
const sm = (a) => a.reduce((x, y) => x + y, 0)
const powmod = (a, b, mod) => {
  let r = 1n
  while (b > 0n) {
    if (b % 2n == 1) r = (r * a) % mod
    b >>= 1n
    a = (a * a) % mod
  }
  return r
}
const minus_mod = (x, y, mod) => (((x - y) % mod) + mod) % mod
const knapsack_01 = (a, k) => {
  if (sm(a) < 2 * k) return 0
  let dp = Array(k).fill(0)
  dp[0] = 1
  for (const x of a) {
    for (let j = k - 1; j > x - 1; j--) {
      dp[j] += dp[j - x]
      dp[j] %= mod
    }
  }
  let bad = ll(sm(dp) * 2),
    tot = powmod(2n, ll(a.length), bmod),
    good = minus_mod(tot, bad, bmod)
  return good
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countPartitions = function(nums, k) {
  return knapsack_01(nums, k)
};



