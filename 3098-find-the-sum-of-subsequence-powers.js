/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfPowers = function (nums, k) {
  const mod = 1e9 + 7

  let n, res, a, memo
  a = nums
  a.sort((x, y) => x - y)
  n = a.length
  memo = new Map()
  const dfs = (i, k, pre, mi) => {
    if (k == 0) return mi
    if (n - i - 1 < k) return 0
    let ke = i + ' ' + k + ' ' + pre + ' ' + mi
    if (memo.has(ke)) return memo.get(ke)
    res = dfs(i + 1, k - 1, a[i + 1], Math.min(mi, a[i + 1] - pre))
    res += dfs(i + 1, k, pre, mi)
    memo.set(ke, res)
    return res % mod
  }
  res = dfs(-1, k, -Infinity, Infinity)
  return res
}
