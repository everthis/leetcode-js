const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
const M = 1e9 + 7
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubsets = function (nums) {
  const n = primes.length
  const dp = new Array(1 << n).fill(0)
  dp[0] = 1

  const map = new Map()
  for (const x of nums) {
    map.set(x, (map.get(x) || 0) + 1)
  }

  let count1 = 0
  for (const [x, count] of map) {
    if (x === 1) continue
    const encode = encoding(x)
    if (encode === -1) continue

    for (let state = (1 << n) - 1; state >= 1; state--) {
      if (state - encode === (state ^ encode)) {
        dp[state] = (dp[state] + ((dp[state - encode] * count) % M)) % M
      }
    }
  }

  let ret = 0
  for (let state = 1; state < 1 << n; state++) {
    ret = (ret + dp[state]) % M
  }

  let power2 = 1
  for (let i = 0; i < (map.get(1) || 0); i++) {
    power2 = (power2 * 2) % M
  }

  return mul(ret, power2)
}

function mul(...arr) {
  let res = 1n
  for (const e of arr) {
    res *= BigInt(e)
  }

  return Number(res % BigInt(M))
}

function encoding(num) {
  let encode = 0
  for (let i = 0; i < primes.length; i++) {
    if (num % primes[i] === 0) {
      encode += 1 << i
      num /= primes[i]
    }
    if (num % primes[i] === 0) {
      return -1
    }
  }
  return encode
}

// another

const M = 1e9 + 7

/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfGoodSubsets = function (nums) {
  const set = new Set([
    2, 3, 5, 6, 7, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23, 26, 29, 30,
  ])
  const map = new Map()
  let count1 = 0

  for (const x of nums) {
    if (set.has(x)) {
      map.set(x, (map.get(x) || 0) + 1)
    }
    if (x === 1) {
      count1++
    }
  }

  const n = map.size
  const count = []
  const digit = []
  for (const [key, value] of map) {
    digit.push(key)
    count.push(value)
  }

  let ret = 0
  for (let state = 1; state < 1 << n; state++) {
    let flag = 1
    for (let i = 0; i < n; i++) {
      if (((state >> i) & 1) === 0) continue
      for (let j = i + 1; j < n; j++) {
        if (((state >> j) & 1) === 0) continue
        if (gcd(digit[i], digit[j]) !== 1) {
          flag = 0
          break
        }
      }
      if (flag === 0) break
    }

    if (flag === 0) continue

    let ans = 1
    for (let i = 0; i < n; i++) {
      if (((state >> i) & 1) === 0) continue
      ans = mul(ans, count[i])
    }
    ret = (ret + ans) % M
  }

  ret = mul(ret, quickMul(2, count1))
  return ret
}

function quickMul(x, N) {
  if (N === 0) {
    return 1
  }
  const y = quickMul(x, Math.floor(N / 2))
  return N % 2 === 0 ? mul(y, y) : mul(y, y, x)
}

function mul(...arr) {
  let res = 1n
  for (const e of arr) {
    res *= BigInt(e)
  }

  return Number(res % BigInt(M))
}

function gcd(a, b) {
  while (b) {
    ;[a, b] = [b, a % b]
  }
  return a
}

// another


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
