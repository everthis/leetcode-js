/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
  const map = new Map(), n = nums.length
  const res = Array(n)
  for(let i = 0; i < n; i++) {
    const cur = nums[i]
    map.set(cur, i)
    res[i] = cur
  }
  
  for(const [v, vv] of operations) {
    const idx = map.get(v)
    res[idx] = vv
    map.set(vv, idx)
  }
  
  return res
};
