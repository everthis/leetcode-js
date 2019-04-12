/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findKthNumber = function(n, k) {
  let curr = 1
  k = k - 1
  while (k > 0) {
    let steps = calSteps(n, curr, curr + 1)
    if (steps <= k) {
      curr++
      k -= steps
    } else {
      curr *= 10
      k--
    }
  }
  return curr
}

//use long in case of overflow
function calSteps(n, n1, n2) {
  let steps = 0
  while (n1 <= n) {
    steps += Math.min(n + 1, n2) - n1
    n1 *= 10
    n2 *= 10
  }
  return steps
}
