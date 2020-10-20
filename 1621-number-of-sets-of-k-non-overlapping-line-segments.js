/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const numberOfSets = function (n, k) {
  let res = BigInt(1)
  const mod = BigInt(10 ** 9 + 7)
  for (let i = 1; i < k * 2 + 1; i++) {
    res = res * BigInt(n + k - i)
    res = res / BigInt(i)
  }
  res = res % mod
  return res
}
