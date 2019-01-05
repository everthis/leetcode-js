/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const rangeBitwiseAnd = function(m, n) {
  while(m<n) n = n & (n-1);
  return n;
};
