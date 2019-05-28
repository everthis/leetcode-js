/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findKthNumber = function(m, n, k) {
  let left = 1;
  let right = m * n;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const nSmaller = count(m, n, mid);
    if (nSmaller >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

function count(m, n, target) {
  let nSmaller = 0;
  let j = n;
  for (let i = 1; i <= m; i++) {
    while (i * j > target) {
      j -= 1;
    }
    nSmaller += j;
  }
  return nSmaller;
}
