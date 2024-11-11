const ll = BigInt,
  mod = ll(1e9 + 7),
  N = 1e4 + 15
let fact = Array(N).fill(0),
  ifact = Array(N).fill(0),
  inv = Array(N).fill(0)
const hcomb = (p, q) => (p == 0 && q == 0 ? 1 : comb(p + q - 1, q))
const comb_init = () => {
  fact[0] = ifact[0] = inv[1] = 1n // factorial, inverse factorial
  for (let i = 2; i < N; i++)
    inv[i] = ((mod - mod / ll(i)) * inv[mod % ll(i)]) % mod
  for (let i = 1; i < N; i++) {
    fact[i] = (fact[i - 1] * ll(i)) % mod
    ifact[i] = (ifact[i - 1] * inv[i]) % mod
  }
}

// combination mod pick k from n
const comb = (n, k) => {
  if (n < k || k < 0) return 0
  return (((fact[n] * ifact[k]) % mod) * ifact[n - k]) % mod
}

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKReducibleNumbers = function (s, k) {
  let dp = new Array(1000).fill(0)
  for (let i = 2; i < 1000; i++) {
    dp[i] = dp[bitCnt(i)] + 1
  }
  let c1 = 0
  let n = s.length
  let res = 0n
  comb_init()
  for (let i = 0; i < n; i++) {
    if (s[i] === "1") {
      for (let c2 = 0; c2 < n - i; c2++) {
        if (c1 + c2 > 0 && dp[c1 + c2] + 1 <= k) {
          res = res + comb(n - i - 1, c2)
        }
      }
      c1++
    }
  }
  return Number(res % mod)

  function bitCnt(num) {
    let cnt = 0
    while (num) {
      cnt += num & 1
      num >>= 1
    }
    return cnt
  }
}
