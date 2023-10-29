/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var countSubMultisets = function (nums, l, r) {
  const a = nums
  const counter = (a_or_s) => {
    let m = new Map()
    for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1)
    return m
  }

  const mod = 1e9 + 7
  let f = Array(r + 1).fill(0),
    m = counter(a),
    res = 0
  f[0] = 1
  for (const [x, occ] of m) {
    if (x == 0) {
      f = f.map((e) => e * (occ + 1))
    } else {
      for (let i = x; i <= r; i++) {
        f[i] += f[i - x]
        f[i] %= mod
      }
      for (let i = r; i >= (occ + 1) * x; i--) {
        f[i] -= f[i - (occ + 1) * x]
        f[i] %= mod
      }
    }
  }
  for (let i = l; i <= r; i++) {
    res += f[i]
    res %= mod
  }
  return (res + mod) % mod
}
