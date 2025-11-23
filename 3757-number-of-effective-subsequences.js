/**
 * @param {number[]} nums
 * @return {number}
 */
var countEffective = function (nums) {
  const MOD = 1_000_000_007
  const n = nums.length
  let T = 0
  for (const v of nums) T |= v
  if (T === 0) return 0

  const bits = []
  for (let b = 0; b < 20; ++b) {
    if (((T >> b) & 1) !== 0) bits.push(b)
  }
  const M = bits.length
  const S = 1 << M
  const freq = new Array(S).fill(0)

  for (const v of nums) {
    let m = 0
    for (let j = 0; j < M; ++j) {
      if (((v >> bits[j]) & 1) !== 0) m |= 1 << j
    }
    freq[m]++
  }

  const F = freq.slice()
  for (let i = 0; i < M; ++i) {
    for (let mask = 0; mask < S; ++mask) {
      if ((mask & (1 << i)) !== 0) {
        F[mask] += F[mask ^ (1 << i)]
      }
    }
  }

  const p2 = new Array(n + 1)
  p2[0] = 1
  for (let i = 1; i <= n; ++i) {
    p2[i] = (p2[i - 1] << 1) % MOD
  }

  let ans = 0
  const all = S - 1
  for (let bmask = 1; bmask < S; ++bmask) {
    const comp = all ^ bmask
    const cnt = F[comp]
    const add = p2[cnt]
    if (countBits(bmask) % 2 === 1) ans = (ans + add) % MOD
    else ans = (ans - add) % MOD
  }

  ans = ((ans % MOD) + MOD) % MOD
  return ans

  function countBits(x) {
    let count = 0
    while (x > 0) {
      count += x & 1
      x >>= 1
    }
    return count
  }
}
