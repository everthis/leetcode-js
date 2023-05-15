/**
 * @param {number[]} nums
 * @param {number[]} removeQueries
 * @return {number[]}
 */
const maximumSegmentSum = function(nums, removeQueries) {
  const INF = Infinity, n = nums.length
  const res = Array(n).fill(0) 
  const ds = Array(n).fill(INF);
  for (let i = n - 1; i > 0; --i) {
    const j = removeQueries[i];
    ds[j] = -nums[j];
    if (j > 0 && ds[j - 1] !== INF) merge(j, j - 1, ds);
    if (j < n - 1 && ds[j + 1] !== INF) merge(j, j + 1, ds);
    res[i - 1] = Math.max(res[i], -ds[find(j, ds)]);
  }
  return res;
};

function find(i, ds) {
  return ds[i] < 0 ? i : ds[i] = find(ds[i], ds);
}

function merge(s1, s2, ds) {
  const p1 = find(s1, ds);
  const p2 = find(s2, ds);
  ds[p2] += ds[p1];
  ds[p1] = p2;
}
