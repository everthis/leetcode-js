/**
 * @param {number} n
 * @return {number}
 */
const minSteps = function(n) {
  let res = 0
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      res += i
      n /= i
    }
  }
  return res
}
