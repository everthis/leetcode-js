////////////////////////////// combination Template //////////////////////////////////
const ll = BigInt,
  mod = ll(1e9 + 7)
let N

let fact, ifact, inv
const comb_init = () => {
  ;(fact = Array(N)), (ifact = Array(N)), (inv = Array(N))
  fact[0] = ifact[0] = inv[1] = 1n
  for (let i = 2; i < N; i++)
    inv[i] = ((mod - mod / ll(i)) * inv[mod % ll(i)]) % mod
  for (let i = 1; i < N; i++) {
    fact[i] = (fact[i - 1] * ll(i)) % mod
    ifact[i] = (ifact[i - 1] * inv[i]) % mod
  }
}

const comb = (n, k) => {
  if (n < k || k < 0) return 0n
  return (((fact[n] * ifact[k]) % mod) * ifact[n - k]) % mod
}
//////////////////////////////////////////////////////////////////////

const ord = (c) => c.charCodeAt()

const M = 1e9 + 7
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const countKSubsequencesWithMaxBeauty = (s, k) => {
  N = s.length + 1
  comb_init()
  let f = Array(26).fill(0),
    res = 1,
    pick = 0
  for (const c of s) f[ord(c) - 97]++
  f = f.sort((x, y) => y - x).filter((x) => x > 0)
  for (let i = 0; i < k; i++) {
    if (f[i] >= f[k - 1]) {
      // ways of first k-1 elements
      res *= f[i]
      res %= M
    }
    if (f[i] == f[k - 1]) pick++ // count last element needed
  }
  let lastPick = comb(f.filter((x) => x == f[k - 1]).length, pick) // ways of last element pick up
  res = (ll(res) * lastPick) % mod
  return res
}
