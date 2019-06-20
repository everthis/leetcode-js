/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
const kthSmallestPrimeFraction = function(A, K) {
  let ans = []
  let left = 0.0
  let right = 1.0
  while (right - left > 1e-9) {
    const mid = left + (right - left) / 2
    const { count, p, q } = maxUnder(mid, A)
    if (count >= K) {
      ans = [p, q]
      right = mid
    } else {
      left = mid
    }
  }
  return ans

  function maxUnder(x, primes) {
    let [p, q] = [0, 1]
    let count = 0
    let l = -1
    for (let r = 1; r < primes.length; r++) {
      while (primes[l + 1] < primes[r] * x) {
        l += 1
      }
      count += l + 1
      if (l >= 0 && p * primes[r] < q * primes[l]) {
        ;[p, q] = [primes[l], primes[r]]
      }
    }
    return { count, p, q }
  }
}
