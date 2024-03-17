/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} maxChanges
 * @return {number}
 */
var minimumMoves = function(nums, k, maxChanges) {
  let A = [0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      A.push(A[A.length - 1] + i);
    }
  }

  let n = A.length - 1;
  let m = Math.max(0, k - maxChanges);
  let res = Number.MAX_VALUE;

  for (let l = m; l <= Math.min(n, Math.min(m + 3, k)); l++) {
    for (let i = 0; i <= n - l; i++) {
      let mid1 = i + Math.floor(l / 2);
      let mid2 = i + l - Math.floor(l / 2);
      let cur = A[i + l] - A[mid2] - (A[mid1] - A[i]);
      res = Math.min(res, cur + (k - l) * 2);
    }
  }

  return res;  
};
