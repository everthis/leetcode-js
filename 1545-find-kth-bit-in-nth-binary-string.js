/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
  let count = 0, l = (1 << n) - 1;
  while (k > 1) {
    if (k == Math.floor(l / 2) + 1) return count % 2 == 0 ? '1' : '0';
    if (k > l / 2) {
      k = l + 1 - k;
      count++;
    }
    l = Math.floor(l / 2);
  }
  return count % 2 === 0 ? '0' : '1'; 
};
