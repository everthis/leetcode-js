/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
  if (n <= 0) return false
  if (n === 1) return true
  let t2 = 0,
    t3 = 0,
    t5 = 0
  const k = Array(n).fill(1)
  k[0] = 1
  for (let i = 1; i < n; i++) {
    k[i] = Math.min(k[t2] * 2, k[t3] * 3, k[t5] * 5)
    if (k[i] == k[t2] * 2) t2++
    if (k[i] == k[t3] * 3) t3++
    if (k[i] == k[t5] * 5) t5++
  }
  return k[n - 1]
}
