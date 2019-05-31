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
