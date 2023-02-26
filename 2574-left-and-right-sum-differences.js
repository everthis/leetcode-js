/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRigthDifference = function(nums) {
    const {abs} = Math
    const n = nums.length
    
    const pre = new Array(n + 2).fill(0)
    const post = new Array(n + 2).fill(0)
    const res = []
    for(let i = 1, cur = 0; i <= n; i++) {
      pre[i] = cur
      cur += nums[i - 1]
    }
  
    for(let i = n, cur = 0; i >= 1; i--) {
      post[i] = cur
      cur += nums[i - 1]
    }
  
    for(let i = 1; i <= n; i++) {
      res[i - 1] = abs(pre[i] - post[i])
    }
    
    return res
};
