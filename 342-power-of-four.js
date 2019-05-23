/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = function(num) {
  if (num === 1) { return true; }
  let f = 4;
  while (f <= num) {
      if (f === num) {
          return true;
      }
      f *= 4;
  }
  return false;
};
