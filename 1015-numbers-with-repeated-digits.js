/**
 * @param {number} N
 * @return {number}
 */
const numDupDigitsAtMostN = function(N) {
  const L = [];
  for (let x = N + 1; x > 0; x = Math.floor(x / 10)) L.unshift(x % 10);

  // Count the number with digits < N
  let res = 0,
    n = L.length;
  for (let i = 1; i < n; ++i) res += 9 * A(9, i - 1);

  const seen = new Set();
  for (let i = 0; i < n; ++i) {
    for (let j = i > 0 ? 0 : 1; j < L[i]; ++j)
      if (!seen.has(j)) res += A(9 - i, n - i - 1);
    if (seen.has(L[i])) break;
    seen.add(L[i]);
  }
  return N - res;
};

function A(m, n) {
  return n === 0 ? 1 : A(m, n - 1) * (m - n + 1);
}
