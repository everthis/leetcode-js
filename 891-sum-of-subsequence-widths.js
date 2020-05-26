/**
 * @param {number[]} A
 * @return {number}
 */
const sumSubseqWidths = function(A) {
  A.sort((a, b) => a - b)
  let c = 1, res = 0, mod = 10 ** 9 + 7
  for (let i = 0, n = A.length; i < n; i++, c = c * 2 % mod) {
    res = (res + A[i] * c - A[n - i - 1] * c) % mod;
  }
  return (res + mod) % mod;
};
