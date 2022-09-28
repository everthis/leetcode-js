/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kthFactor = function (n, k) {
  let d = 1
  for (; d * d <= n; ++d) {
    if (n % d == 0) {
      if (--k == 0) {
        return d
      }
    }
  }
  for (d = d - 1; d >= 1; d--) {
    if (d * d == n) continue
    if (n % d == 0) {
      k--
      if (k == 0) {
        return n / d
      }
    }
  }
  return -1
}
