let pre = Array(10001).fill(0);
let cur = Array(10001).fill(0);
let ps = Array(10001).fill(0);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumStrength = function (nums, k) {
  let n = nums.length;

  ps[0] = 0;
  for (let i = 0; i < n; ++i) {
    ps[i + 1] = ps[i] + nums[i];
  }

  ++n;
  cur.fill(0, 0, n);

  for (let i = 1; i <= k; ++i) {
    let tem = pre;
    pre = cur;
    cur = tem;

    let t = 1 + k - i;
    if (!(i & 1)) t = -t;

    let m = pre[i - 1] - ps[i - 1] * t;
    cur[i] = ps[i] * t + m;
    m = Math.max(m, pre[i] - ps[i] * t);

    for (let j = i + 1; j < n; ++j) {
      cur[j] = Math.max(cur[j - 1], ps[j] * t + m);
      m = Math.max(m, pre[j] - ps[j] * t);
    }
  }

  return cur[n - 1];
};
