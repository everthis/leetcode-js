/**
 * @param {number} n
 * @return {number}
 */
const minimumBoxes = function(n) {
  let i = 1, c = 1, s = 1
  while(s < n) {
    i += 1, c += i, s += c
  }
  while(s - i >= n) {
    s -= i, c -= 1, i -= 1
  }
  return c
};

// another


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

