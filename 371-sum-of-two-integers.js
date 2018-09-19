/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function(a, b) {
  return b === 0 ? a : getSum(a ^ b, (a & b) << 1);
};
