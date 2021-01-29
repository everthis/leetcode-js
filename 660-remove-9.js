/**
 * @param {number} n
 * @return {number}
 */
const newInteger = function (n) {
  let res = ''
  while (n > 0) {
    res = (n % 9) + res
    n = Math.floor(n / 9)
  }
  return parseInt(res, 10)
}

// another

/**
 * @param {number} n
 * @return {number}
 */
const newInteger = function (n) {
  return +(n).toString(9)
}
