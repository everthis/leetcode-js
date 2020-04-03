/**
 * @param {number} a
 * @return {number}
 */
const smallestFactorization = function (a) {
  if (a < 2) return a
  let MAX_INT = 2 ** 31 - 1,
    res = 0,
    mul = 1
  for (let i = 9; i >= 2; i--) {
    while (a % i === 0) {
      a /= i
      res = mul * i + res
      mul *= 10
    }
  }
  return a < 2 && res <= MAX_INT ? res : 0
}
