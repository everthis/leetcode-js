/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
const nthSuperUglyNumber = function(n, primes) {
  if (n === 1) return 1
  const indexes = new Array(primes.length).fill(0)
  const arr = [1]
  for (let i = 1; i <= n - 1; i++) {
    arr[i] = +Infinity
    for (let j = 0; j < primes.length; j++) {
      arr[i] = Math.min(arr[i], arr[indexes[j]] * primes[j])
    }
    for (let j = 0; j < primes.length; j++) {
      if (arr[i] === arr[indexes[j]] * primes[j]) {
        indexes[j]++
      }
    }
  }
  return arr[n - 1]
}
