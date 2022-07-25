/**
 * @param {number[]} nums
 * @return {number}
 */
const zeroFilledSubarray = function(nums) {
  let res = 0
  let idx = -1
  const n = nums.length
  for(let i = 0; i < n; i++) {
    const e = nums[i]
    if(e !== 0) {
      const len = (i - 1) - idx
      res += helper(len)
      idx = i
    } else {
      continue
    }
  }
  if(idx !== n - 1) {
    res += helper(n - 1 - idx)
  }
  
  
  return res
  
  function helper(n) {
    let res = 0
    for(let i = 1; i <= n; i++) {
      res += i
    }
    
    return res
  }
};
