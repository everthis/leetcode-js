/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countPartitions(nums, k) {
  const bi = BigInt
  const mod = bi(1e9 + 7)
  const n = nums.length, total = bi(2 ** n)
  const sum = nums.reduce((ac, e) => ac + e, 0)
  if(sum < 2 * k) return 0
  const dp = Array.from({ length: n + 1}, () => Array(k).fill(0n))
  for(let i = 0; i <= n; i++) dp[i][0] = 1n

  for(let i = 1; i <= n; i++) {
    const e = nums[i - 1]
    for(let j = 1; j < k; j++) {
        dp[i][j] = dp[i - 1][j]
        if(j >= e) dp[i][j] = bi(dp[i][j] + dp[i - 1][j - e]) % mod
    }
  }
  const tmp = dp[n].reduce((ac, e) => ac + bi(e), 0n)
  return (total - tmp * 2n) % mod
}

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countPartitions(nums, k) {
  const mod = 1e9 + 7
  let total = 0
  let res = 1
  const dp = new Array(k).fill(0)
  dp[0] = 1

  for (let a of nums) {
    for (let i = k - 1 - a; i >= 0; i--) {
      dp[i + a] = (dp[i + a] + dp[i]) % mod
    }
    res = (res * 2) % mod
    total += a
  }

  for (let i = 0; i < k; i++) {
    res -= total - i < k ? dp[i] : dp[i] * 2
  }

  return ((res % mod) + mod) % mod
}

// another



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



