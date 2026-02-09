const mod = 1e9 + 7

function compute_fact() {
  const fact = new Array(100000)
  let product = 1n
  fact[0] = 1n
  for (let i = 1; i < 100000; i++) {
    product *= BigInt(i)
    if (product >= BigInt(mod)) product %= BigInt(mod)
    fact[i] = product
  }
  return fact
}

function modPow(x, exp, Mod = mod) {
  x = BigInt(x)
  exp = BigInt(exp)
  Mod = BigInt(Mod)
  if (exp === 0n) return 1n
  let ans = x
  let bits = exp.toString(2).length
  for (let b = bits - 2; b >= 0; b--) {
    ans = (ans * ans) % Mod
    if ((exp & (1n << BigInt(b))) !== 0n) {
      ans = (ans * x) % Mod
    }
  }
  return ans
}

// Euclidean algo finds x, y, d such that ax+by = d where d=gcd(a, b)
function modInverse(a, b = mod) {
  let x0 = 1,
    x1 = 0
  let r0 = a,
    r1 = b
  while (r1 !== 0) {
    let q = Math.floor(r0 / r1)
    let rr = r1,
      xx = x1
    r1 = r0 - q * r1
    x1 = x0 - q * x1
    r0 = rr
    x0 = xx
  }
  if (x0 < 0) x0 += b
  return x0
}

function comb(n, k, fact) {
  return (
    (((fact[n] * BigInt(modInverse(Number(fact[k])))) % BigInt(mod)) *
      BigInt(modInverse(Number(fact[n - k])))) %
    BigInt(mod)
  )
}

let fact = null
/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var countGoodArrays = function (n, m, k) {
  if (!fact) fact = compute_fact()
  const big = BigInt
  return Number(
    BigInt(
      (((big(m) * modPow(m - 1, n - k - 1)) % big(mod)) *
        comb(n - 1, k, fact)) %
        big(mod),
    ),
  )
}
