/**
 * @param {string} s
 * @return {number}
 */
const makeStringSorted = function (s) {
  const mod = 1e9 + 7,
    n = s.length
  const a = 'a'.charCodeAt(0)
  let res = 0
  const freq = Array(26).fill(0)
  for (let c of s) {
    freq[c.charCodeAt(0) - a]++
  }
  const fact = Array(n + 1).fill(1)
  getfact()
  let l = n
  for (let c of s) {
    l--
    let t = 0,
      rev = 1
    for (let i = 0; i < 26; i++) {
      if (i < c.charCodeAt(0) - a) t += freq[i]
      rev = modmul(rev, fact[freq[i]])
    }
    res += modmul(modmul(t, fact[l]), binExpo(rev, mod - 2))
    res %= mod
    freq[c.charCodeAt(0) - a]--
  }
  return res

  function modmul(a, b) {
    const big = BigInt
    return Number(((big(a) % big(mod)) * (big(b) % big(mod))) % big(mod))
  }

  function binExpo(a, b) {
    if (b === 0) return 1
    let res = binExpo(a, Math.floor(b / 2))
    if (b & 1) {
      return modmul(a, modmul(res, res))
    } else {
      return modmul(res, res)
    }
  }

  function modmulinv(a) {
    return binExpo(a, mod - 2)
  }

  function getfact() {
    fact[0] = 1
    for (let i = 1; i <= 3000; i++) {
      fact[i] = modmul(fact[i - 1], i)
    }
  }
  
}


// another



/**
 * @param {string} s
 * @return {number}
 */
const makeStringSorted = function (s) {
  const mod = BigInt(10 ** 9 + 7),
    n = s.length
  const a = 'a'.charCodeAt(0)
  let ans = 0n
  const freq = Array(26).fill(0n)
  for (let c of s) {
    freq[c.charCodeAt(0) - a]++
  }
  const fact = Array(n + 1).fill(1n)
  for (let i = 1n; i <= n; i++) {
    fact[i] = (fact[i - 1n] * i) % mod
  }
  let l = n
  for (let c of s) {
    l--
    let t = 0n,
      rev = 1n
    for (let i = 0; i < 26; i++) {
      if (i < c.charCodeAt(0) - a) t += freq[i]
      rev = (rev * fact[freq[i]]) % mod
    }
    ans += ((t * fact[l]) % mod) * modpow(rev, mod - 2n)
    ans %= mod
    freq[c.charCodeAt(0) - a]--
  }
  return Number(ans)
  function modpow(b, p) {
    let ans = 1n
    for (; p; p >>= 1n) {
      if (p & 1n) ans = (ans * b) % mod
      b = (b * b) % mod
    }
    return ans
  }
}
