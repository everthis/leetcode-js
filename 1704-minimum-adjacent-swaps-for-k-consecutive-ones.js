/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minMoves = function(nums, k) {
    if (k == 1) return 0;
    let n = 0;
    let pos = [];
    for (let i = 0; i < nums.length; ++i) {
      if (nums[i]) {
        pos.push(i - (n++));
      }
    }
    let sums = [];
    sums[0] = pos[0];
    for (let i = 1; i < n; ++i) {
      sums[i] = pos[i] + sums[i - 1];
    }
    let res = Number.MAX_VALUE;
    let l = (k / 2) >> 0, r = k - l - 1;
    for (let i = 0; i + k <= n; ++i) {
      let m = i + ((k / 2) >>> 0);
      let cur = pos[m] * l - (sums[m - 1] - sums[i] + pos[i]) - pos[m] * r + sums[i + k - 1] - sums[m];
      res = Math.min(cur, res);
    }
    return res;
};

