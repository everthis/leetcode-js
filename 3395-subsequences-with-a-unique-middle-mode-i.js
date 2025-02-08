/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencesWithMiddleMode = function(nums) {
  const n = nums.length;
  // 总方案数为C(n,5)
  let ans = comb(n, 5);
  const mod = 10 ** 9 + 7;
  // 统计不合法的个数
  // 记录每个元素的个数
  const hash = new Map();
  for (const num of nums) hash.set(num, (hash.get(num) || 0) + 1);
  const pre = new Map(); // 记录之前的元素情况
  // 枚举x，作为子序列最中间的数
  for (let i = 0; i < n - 2; i++) {
    const x = nums[i];
    hash.set(x, hash.get(x) - 1); // 更新右边元素的个数
    if (i > 1) {
      const right = n - 1 - i; // 右边元素个数
      const left = i; // 左边元素个数
      const preX = pre.get(x) || 0; // 左边x元素个数
      const sufX = hash.get(x) || 0; // 右边x元素个数
      // 不合法：只有一个x的情况，左边选取不是x的两个，右边选取不是x的两个
      ans -= comb(left - preX, 2) * comb(right - sufX, 2);
      // 不合法：有两个x，但是要有一个y，出现在2次以上
      for (const [y, sufY] of hash) {
        if (y === x) continue;
        const preY = pre.get(y) || 0;
        // 左边两个Y，右边一个X, yy x xz(z可以为y)
        ans -= comb(preY, 2) * sufX * (right - sufX);
        // 右边两个Y，左边一个X，zx x yy (z可以为y)
        ans -= comb(sufY, 2) * preX * (left - preX);
        // 左右各一个y，另一个x在左边，xy x yz(z !== y,避免重复)
        ans -= preY * preX * sufY * (right - sufX - sufY);
        // 左右各一个y，另一个x在右边，zy x yx(z !== y,避免重复)
        ans -= preY * sufY * sufX * (left - preX - preY);
      }
    }
    pre.set(x, (pre.get(x) || 0) + 1); // 更新左边元素的个数
  }
  return ans % mod;  
};


/**
 * @description 求组合数
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */
function comb(n, m) {
  if (n < m) return 0;
  let top = 1;
  let bottom = 1;
  let start = 0;
  while (start < m) {
    top *= n - start;
    bottom *= m - start;
    start++;
  }
  return top / bottom;
}
