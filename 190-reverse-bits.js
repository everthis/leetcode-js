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

// another

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
  const b = n.toString(2)
  const leadingZeroes = b.padStart(32,'0')
  const rev = leadingZeroes.split('')
  rev.reverse()
  return parseInt(rev.join(''), 2)
};
