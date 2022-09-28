/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function(nums) {
  const n = nums.length
  let res = 0
  const pre = Array(n).fill(0)
  const suf = Array(n).fill(0)
  
  let cnt = 0, hasZero = false
  for(let i = 0; i < n; i++) {
    if(nums[i] === 1) {
      cnt++
      pre[i] = cnt
      res = Math.max(res, cnt)
    } else {
      hasZero = true
      cnt = 0
      pre[i] = cnt
    }
  }
  if(!hasZero) res--
  
  cnt = 0
  
  for(let i = n - 1; i >= 0; i--) {
    if(nums[i] === 1) {
      cnt++
      suf[i] = cnt

    } else {
      cnt = 0
      suf[i] = cnt

    }
  }
  // console.log(pre,suf)
  for(let i = 1; i < n - 1; i++) {
    if(nums[i] === 0) {
      res = Math.max(res, pre[i - 1] + suf[i + 1])
    }
  }
  
  
  return res
};
