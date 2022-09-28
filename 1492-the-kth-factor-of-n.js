/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kthFactor = function (n, k) {
  let d = 1
  for (let i = 1; i * i < n; i++) {
    if (n % i === 0) {
      k--
      if (k === 0) return i
    }
  }

  for (let i = ~~Math.sqrt(n); i >= 1; i--) {
    if (n % ~~(n / i) === 0) {
      k--
      // console.log(n, i, n/i, n % (n / i))
      if (k === 0) return n / i
    }
  }

  return -1
}
