/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
  const result = [];
  if (nums == null || nums.length === 0) {
    return result;
  }
  const map = {};
  for (let n of nums) {
    map[n] = map.hasOwnProperty(n) ? map[n] + 1 : 1;
  }
  permuteUniqueHelper(map, nums.length, [], 0, result);
  return result;
};

function permuteUniqueHelper(m, l, p, i, r) {
  if (l === i) {
    r.push(p.slice(0, l));
    return;
  }
  for (let key of Object.keys(m)) {
    if (m[key] > 0) {
      m[key] = m[key] - 1;
      p[i] = key;
      permuteUniqueHelper(m, l, p, i + 1, r);
      m[key] = m[key] + 1;
    }
  }
}
