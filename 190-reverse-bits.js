/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
  let s = '';
  let count = 0;
  let index = 31;
  while (n > 0) {
    if (n % 2 !== 0) count += Math.pow(2, index);
    index--;
    n = Math.floor(n / 2);
  }
  return count;
};
