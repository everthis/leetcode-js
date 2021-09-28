/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
  if(n === 0) return 0
  let sum = 0, product = 1
  n = '' + n
  for(let ch of n) {
    sum += +(ch)
    product *= +(ch)
  }
  return product - sum
};
