/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function(arr, k) {
  let l = 0, r = arr.length, m;
  while (l < r) {
    m = (l + r) >> 1;
    if (arr[m] - 1 - m < k) l = m + 1;
    else r = m;
  }
  return l + k;
};
