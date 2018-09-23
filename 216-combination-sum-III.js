/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function(k, n) {
  const ans = [];
  combination(ans, [], k, 1, n);
  return ans;
};

function combination(ans, comb, k, start, n) {
  if (comb.length > k) {
    return;
  }
  if (comb.length === k && n === 0) {
    ans.push(comb.slice(0));
    return;
  }
  for (let i = start; i <= n && i <= 9; i++) {
    comb.push(i);
    combination(ans, comb, k, i + 1, n - i);
    comb.pop();
  }
}
