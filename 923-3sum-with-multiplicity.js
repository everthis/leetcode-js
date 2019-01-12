/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
const threeSumMulti = function(A, target) {
  const d = {};
  let res = 0;
  const mod = Math.pow(10, 9) + 7;
  for (let i = 0; i < A.length; i++) {
    res += d[target - A[i]] >= 0 ? d[target - A[i]] : 0;
    res %= mod;
    for (let j = 0; j < i; j++) {
      d[A[i] + A[j]] = (d[A[i] + A[j]] || 0) + 1;
    }
  }
  return res % mod;
};
