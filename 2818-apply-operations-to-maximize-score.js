/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
  const n = nums.length
  const factors = Array(n).fill(0) // To store prime factors count for each number
  const count = Array(n).fill(0) // To store the count of reachable elements for each element

  // Calculate prime factors count for each number
  for (let i = 0; i < n; i++) {
    factors[i] = primeFactors(nums[i])
  }

  const stack = [-1] // Monotonic stack to keep track of elements in decreasing order of factors
  let curr = 0

  // Calculate the count of reachable elements for each element
  for (let i = 0; i < n; i++) {
    while (
      stack[stack.length - 1] !== -1 &&
      factors[stack[stack.length - 1]] < factors[i]
    ) {
      curr = stack.pop()
      count[curr] = (curr - stack[stack.length - 1]) * (i - curr)
    }
    stack.push(i)
  }

  // Process any remaining elements in the stack
  while (stack[stack.length - 1] !== -1) {
    curr = stack.pop()
    count[curr] = (curr - stack[stack.length - 1]) * (n - curr)
  }

  // Create an array of pairs containing elements and their corresponding reachable count
  const pairs = Array(n)
  for (let i = 0; i < n; i++) {
    pairs[i] = [nums[i], count[i]]
  }

  // Sort the pairs in descending order of elements
  pairs.sort((a, b) => b[0] - a[0])

  let res = BigInt(1)
  const mod = BigInt(1e9 + 7)

  // Calculate the maximum score using modPow and available moves
  for (let i = 0; i < pairs.length && k > 0; i++) {
    const curr = Math.min(pairs[i][1], k)
    res = (res * modPow(BigInt(pairs[i][0]), BigInt(curr), mod)) % mod
    k -= curr
  }

  return Number(res) // Convert the result to a regular number before returning
}

/**
 * Function to calculate modular exponentiation.
 * @param {bigint} x - Base.
 * @param {bigint} y - Exponent.
 * @param {bigint} m - Modulus.
 * @return {bigint} - Result of modular exponentiation.
 */
function modPow(x, y, m) {
  if (y === 0n) {
    return 1n
  }
  let p = modPow(x, y / 2n, m) % m
  p = (p * p) % m
  if (y % 2n === 0n) {
    return p
  }
  return (p * x) % m
}

/**
 * Function to calculate the count of prime factors for a number.
 * @param {number} num - Input number.
 * @return {number} - Count of prime factors for the input number.
 */
function primeFactors(num) {
  let count = 0
  let factor = 2
  const end = Math.sqrt(num)

  while (num > 1 && factor <= end) {
    let inc = false
    while (num % factor === 0) {
      if (!inc) {
        count++
        inc = true
      }
      num /= factor
    }
    factor++
  }

  if (num > 1) {
    count++
  }

  return count
}
