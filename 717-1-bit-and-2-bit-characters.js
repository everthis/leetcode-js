/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = function(bits) {
  let ones = 0;
  //Starting from one but last, as last one is always 0.
  for (let i = bits.length - 2; i >= 0 && bits[i] != 0; i--) {
    ones++;
  }
  return ones % 2 > 0 ? false : true;
};
