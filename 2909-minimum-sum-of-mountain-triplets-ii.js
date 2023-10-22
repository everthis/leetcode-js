/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumSum = function(nums) {
  let pre = [],pmin = [], suf = [], smin = []
  let i = 0
  const n = nums.length
  for(let i = 0; i < n; i++) {
    const cur = nums[i]
    while(pre.length && cur <= nums[pre.at(-1)]) {
      pre.pop()
    }
    if(pre.length) pmin[i] = nums[pre[0]]
    pre.push(i)
  }
  for(let i = n - 1; i >= 0; i--) {
    const cur = nums[i]
    while(suf.length && cur <= nums[suf.at(-1)]) {
      suf.pop()
    }
    if(suf.length) smin[i] = nums[suf[0]]
    suf.push(i)
  }
  let res = Infinity
  
  for(let i = 1; i < n - 1;i++) {
    if(pmin[i] != null && smin[i] != null) {
      res = Math.min(res, nums[i] + pmin[i] + smin[i])
    }
  }
  
  return res === Infinity ? -1 : res
};
