/**
 * @param {number[]} nums
 * @param {number[]} removeQueries
 * @return {number[]}
 */
const maximumSegmentSum = function(nums, removeQueries) {
  removeQueries.reverse()
  const rev = removeQueries
  const hash = {}
  const res = []
  let cur = 0
  for(const idx of rev) {
    hash[idx] = [nums[idx], 1]
    const [lv, ll] = (hash[idx - 1] || [0, 0])
    const [rv, rl] = (hash[idx + 1] || [0, 0])
    
    const val = nums[idx] + lv + rv
    hash[idx + rl] = [val, ll + rl + 1]
    hash[idx - ll] = [val, ll + rl + 1]
    
    cur = Math.max(cur, val)
    res.push(cur)
  }
  res.pop()
  res.reverse()
  res.push(0)
  
  return res
};

