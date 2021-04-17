/**
 * @param {number} n
 * @return {number}
 */
const countDigitOne = function(n) {
  let count = 0
  for (let m = 1; m <= n; m *= 10) {
    const a = Math.floor(n / m)
    const b = n % m
    if (a % 10 > 1) {
      count += (Math.floor(a / 10) + 1) * m
    } else if (a % 10 === 1) {
      count += Math.floor(a / 10) * m + b + 1
    } else {
      count += Math.floor(a / 10) * m
    }
  }
  return count
}

// another

/**
 * @param {number} n
 * @return {number}
 */
const countDigitOne = function (n) {
  if (n <= 0) return 0
  let ones = 0
  for (let i = 1, q = n; i <= n; i *= 10, q = (q / 10) >> 0) {
    const pre = (n / (i * 10)) >> 0,
      cur = q % 10,
      suf = n % i
    ones += pre * i
    ones += 1 < cur ? i : 1 == cur ? suf + 1 : 0
  }
  return ones
}

// another

/**
 * @param {number} n
 * @return {number}
 */
const countDigitOne = function(n) {
  let res = 0, factor = 1, lower = 0, cur = 0, higher = 0
  while(~~(n / factor) !== 0) {
    lower = n - (~~(n / factor)) * factor
    cur = (~~(n / factor)) % 10
    higher = ~~(n / (factor * 10))
    switch(cur) {
      case 0:
        res += higher * factor
        break
      case 1:
        res += higher * factor + lower + 1
        break
      default:
        res += (higher + 1) * factor
        break
    }
    factor *= 10
  }
  
  return res
};
