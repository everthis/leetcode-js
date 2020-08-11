/**
 * @param {number} n
 * @return {number}
 */
const countDigitOne = function(n) {
  let count = 0
  for (let m = 1; m <= n; m *= 10) {
    const a = Math.floor(n / m)
    const b = n % m
    if (a % 10 > 1) {
      count += (Math.floor(a / 10) + 1) * m
    } else if (a % 10 === 1) {
      count += Math.floor(a / 10) * m + b + 1
    } else {
      count += Math.floor(a / 10) * m
    }
  }
  return count
}

// another

/**
 * @param {number} n
 * @return {number}
 */
const countDigitOne = function (n) {
  if (n <= 0) return 0
  let ones = 0
  for (let i = 1, q = n; i <= n; i *= 10, q = (q / 10) >> 0) {
    const pre = (n / (i * 10)) >> 0,
      cur = q % 10,
      suf = n % i
    ones += pre * i
    ones += 1 < cur ? i : 1 == cur ? suf + 1 : 0
  }
  return ones
}

