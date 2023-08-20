/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getSumAbsoluteDifferences = function(nums) {
  const n = nums.length, { abs } = Math
  const res = []
  let e0 = 0
  for(let i = 1; i < n; i++) {
    e0 += abs(nums[i] - nums[0])
  }
  res[0] = e0
  for(let i = 1; i < n; i++) {
    const pre = res[i - 1], diff = nums[i] - nums[i - 1]
    let cur = pre + diff * (i - 1) - diff * (n - 1 - i)
    res.push(cur)
  }
  
  return res
};
