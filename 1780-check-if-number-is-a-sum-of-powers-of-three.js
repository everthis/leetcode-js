/**
 * @param {number} n
 * @return {boolean}
 */
const checkPowersOfThree = function(n) {
  const num = ~~(n / 3)
  const rem = n % 3
  if(num === 0 && rem === 1) return true
  if(rem === 2) return false
  return checkPowersOfThree(num)
};
