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


// another

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
  const set = new Set()
  const used = new Set()
  bt(nums, 0, [], used, set)
  const res = []
  for(let item of set) {
    res.push(item.split(','))
  }
  return res
};

function bt(nums, i, cur, used, set) {
  if(i === nums.length) {
    set.add(cur.slice().join(','))
    return
  }
  for(let idx = 0; idx < nums.length; idx++) {
    if(used.has(idx)) continue
    cur.push(nums[idx])
    used.add(idx)
    bt(nums, i + 1, cur, used, set)
    used.delete(idx)
    cur.pop()
  }
}
