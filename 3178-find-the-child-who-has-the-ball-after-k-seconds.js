/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
  let l = 2 * (n-1)
  let r = k % l
  if (r < n) return r
  else return l - r
};
