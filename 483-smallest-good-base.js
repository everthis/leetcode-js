/**
 * @param {string} n
 * @return {string}
 */
const smallestGoodBase = function(n) {
  const N = BigInt(n),
    bigint2 = BigInt(2),
    bigint1 = BigInt(1),
    bigint0 = BigInt(0)
  let maxLen = countLength(N, bigint2)
  for (let length = maxLen; length > 0; length--) {
    let [found, base] = findMatchInHalf(length)
    if (found) return '' + base
  }
  return '' + (N - 1)
  function findMatchInHalf(length, smaller = bigint2, bigger = N) {
    if (smaller > bigger) return [false]
    if (smaller === bigger) {
      return [valueOf1s(smaller, length) === N, smaller]
    }
    let mid = (smaller + bigger) / bigint2
    let val = valueOf1s(mid, length)
    if (val === N) return [true, mid]
    if (val > N) return findMatchInHalf(length, smaller, mid - bigint1)
    return findMatchInHalf(length, mid + bigint1, bigger)
  }
  function valueOf1s(base, lengthOf1s) {
    let t = bigint1
    for (let i = 1; i < lengthOf1s; i++) {
      t *= base
      t += bigint1
    }
    return t
  }
  function countLength(N, base) {
    let t = N,
      len = 0
    while (t > bigint0) {
      t /= base
      len++
    }
    return len
  }
}
