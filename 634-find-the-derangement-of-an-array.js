/**
 * @param {number} n
 * @return {number}
 */
const findDerangement = function (n) {
  if ([0, 1].includes(n)) return 0
  if (n == 2) return 1
  let prev = 1
  let MOD = 10 ** 9 + 7
  let result = 0
  for (let i = 3; i <= n; i++) {
    result = (prev * i + (i % 2 == 1 ? -1 : 1)) % MOD
    prev = result
  }
  return result
}
