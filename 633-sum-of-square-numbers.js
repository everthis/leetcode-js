/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function(c) {
  if (c < 0) return false;
  const max = Math.floor(Math.sqrt(c));
  for (let i = 0; i < max + 1; i++) {
    if (Number.isInteger(Math.sqrt(c - i * i))) {
      return true;
    }
  }
  return false;
};
