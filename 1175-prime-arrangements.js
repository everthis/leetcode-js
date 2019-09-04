/**
 * @param {number} n
 * @return {number}
 */
function isPrime(n) {
  // Corner case
  if (n <= 1) return false
  // Check from 2 to n-1
  for (let i = 2; i < n; i++) if (n % i == 0) return false
  return true
}

const numPrimeArrangements = function(n) {
  let primes = 0 // # of primes.
  let result = 1
  const mod = 10 ** 9 + 7
  for (let i = 2; i <= n; i++) if (isPrime(i)) primes++
  // Calculate factorials and multiply.
  for (let i = primes; i >= 1; i--) result = (i * result) % mod
  for (let i = n - primes; i >= 1; i--) result = (i * result) % mod
  return result // result of multiplying factorial(primes) with factorial(non-primes)
}
