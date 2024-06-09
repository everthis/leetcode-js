/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var valueAfterKSeconds = function(n, k) {
  const mod = 1e9 + 7
  let a = new Array(n).fill(1)

  for (let i = 0; i < k; i++) {
    for (let j = 1; j < n; j++) {
      a[j] = (a[j] + a[j - 1]) % mod
    }
  }

  return a[n - 1]
};
