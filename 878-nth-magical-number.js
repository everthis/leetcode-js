/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
const gcd = (x, y) => {
  while (y > 0) [x, y] = [y, x % y]
  return x
}
const lcm = (x, y) => (x * y) / gcd(x, y)
const nthMagicalNumber = function(N, A, B) {
  let l = lcm(A, B)
  const seq = {}
  for (let i = 1; i < Math.floor(l / A) + 1; i++) seq[i * A] = 1
  for (let i = 1; i < Math.floor(l / B) + 1; i++) seq[i * B] = 1
  const arr = Object.keys(seq)
    .sort((a, b) => a - b)
    .map(el => +el)
  let idx = N % arr.length === 0 ? arr.length - 1 : (N % arr.length) - 1
  let res = Math.floor((N - 1) / arr.length) * arr[arr.length - 1] + arr[idx]
  return res % (1e9 + 7)
}

// another

const nthMagicalNumber = function(N, A, B) {
  const gcd = (x, y) => {
    if (x == 0) return y
    return gcd(y % x, x)
  }
  const MOD = 1e9 + 7
  const L = (A / gcd(A, B)) * B
  let lo = 0
  let hi = 1e15
  while (lo < hi) {
    let mi = lo + Math.trunc((hi - lo) / 2)
    if (Math.trunc(mi / A) + Math.trunc(mi / B) - Math.trunc(mi / L) < N) lo = mi + 1
    else hi = mi
  }
  return lo % MOD
}
