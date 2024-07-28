/**
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
const nonSpecialCount = function (l, r) {
  let res = 0
  for (
    let i = Math.floor(Math.sqrt(l)) - 10;
    i <= Math.floor(Math.sqrt(r)) + 10;
    i++
  ) {
    if (isPrime(i) && l <= i * i && i * i <= r) {
      res += 1
    }
  }
  return r - l + 1 - res
}

function isPrime(n) {
  if (n <= 1) {
    return false
  }
  if (n <= 3) {
    return true
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false
  }
  let i = 5
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false
    }
    i += 6
  }
  return true
}
