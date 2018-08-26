/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  r = x;
  while (r * r > x) r = ((r + x / r) / 2) | 0;
  return r;
};
