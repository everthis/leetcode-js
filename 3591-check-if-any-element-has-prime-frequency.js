/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function (nums) {
  const freq = {}
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1
  }

  for (const v of Object.values(freq)) {
    if (isPrime(v)) {
      return true
    }
  }

  return false
}
function isPrime(n) {
  if (n === 1) {
    return false
  }
  let count = 0
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++
    }
  }
  return count === 2
}
