/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = function(n) {
    let start = 1
    let len = 1
    let base = 9
    while(n > len * base) {
      n = n - len * base
      len++
      start *= 10
      base *= 10
    }
    let target = start + (n - 1) / len
    let reminder = (n - 1) % len
    return (''+target).charAt(reminder)
};
