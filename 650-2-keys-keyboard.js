/**
 * @param {number} n
 * @return {number}
 */
const minSteps = function(n) {
  let s = 0;
  for (let d = 2; d <= n; d++) {
    while (n % d == 0) {
      s += d;
      n = Math.floor(n / d);
    }
  }
  return s;
};
