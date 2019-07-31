/**
 * @param {number} n
 * @return {number}
 */
const hash = {}
const tribonacci = function(n) {
  if(n === 0) return 0
  if(n === 2 || n === 1) return 1
  if(hash[n] != null) return hash[n]
  let tmp = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1)
  return hash[n] = tmp
};

// another

/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function(n) {
  if (n < 2) return n
  let prev0 = 0
  let prev1 = 1
  let prev2 = 1
  for (let count = 3; count <= n; count++) {
    let next = prev2 + prev1 + prev0
    prev0 = prev1
    prev1 = prev2
    prev2 = next
  }
  return prev2
}
