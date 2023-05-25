/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findKthNumber = function (n, k) {
  let cur = 1
  k = k - 1
  while(k > 0) {
    const num = calc(cur)
    if(num <= k) {
      cur++
      k -= num
    } else {
      k--
      cur *= 10
    }
  }
  return cur
  
  function calc(cur) {
    let total = 0
    let nxt = cur + 1
    while(cur <= n) {
      total += Math.min(n - cur + 1, nxt - cur)
      nxt *= 10
      cur *= 10
    }
    
    return total
  }
}

// another

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findKthNumber = function (n, k) {
  let curr = 1
  k = k - 1
  while (k > 0) {
    let steps = calSteps(n, curr, curr + 1)
    if (steps <= k) {
      curr += 1
      k -= steps
    } else {
      curr *= 10
      k -= 1
    }
  }
  return curr

  function calSteps(n, n1, n2) {
    let steps = 0
    while (n1 <= n) {
      steps += Math.min(n + 1, n2) - n1
      n1 *= 10
      n2 *= 10
    }
    return steps
  }
}
