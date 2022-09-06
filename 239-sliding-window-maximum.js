/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function(nums, k) {
  const n = nums.length
  const stk = []
  const res = []
  
  for(let i = 0; i < n; i++) {
    while(stk.length && stk[0] < i - k + 1) {
      stk.shift()
    }
    while(stk.length && nums[stk[stk.length - 1]] <= nums[i]) {
      stk.pop()
    }
    stk.push(i)
    if(i >= k - 1) {
      res.push(nums[stk[0]])
    }
  }
  
  return res
};
