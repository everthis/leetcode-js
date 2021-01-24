/**
 * @param {number} n
 * @return {number}
 */
const minimumBoxes = function(n) {
  let sum = 1n, base = 1n, row = 1n;
  n = BigInt(n)
  while (sum < n) {
    base += (++row);
    sum += base;
  }
  while (sum > n) {
    --base;
    sum -= (row--);
    if (sum < n) return base + 1n;
  }
  return base;
};

