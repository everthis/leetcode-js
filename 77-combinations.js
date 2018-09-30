/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
  const res = [];
  bt(res, [], 1, n, k);
  return res;
};

function bt(res, tmp, start, n, k) {
  if (k === 0) {
    res.push(tmp.slice(0));
    return;
  }
  for (let i = start; i <= n - k + 1; i++) {
    tmp.push(i);
    bt(res, tmp, i + 1, n, k - 1);
    tmp.pop();
  }
}
