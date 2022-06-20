/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function(nums) {
  const n = nums.length
  let res = 0, j = -1;
  const dp = Array(n).fill(0), stack = Array(n).fill(0);
  for (let i = n - 1; i >= 0; --i) {
    while (j >= 0 && nums[i] > nums[stack[j]]) {
      dp[i] = Math.max(++dp[i], dp[stack[j--]])
      res = Math.max(res, dp[i])
    }
    stack[++j] = i
  }
  return res
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const totalSteps = function(nums) {
  let res = 0, stk = []
  stk.push([nums[0], 0])
  for(let i = 1, n = nums.length; i < n; i++) {
    let steps = 0
    while(stk.length && stk[stk.length - 1][0] <= nums[i]) {
      const peek = stk.pop() 
      steps = Math.max(steps, peek[1])
    }
    if(stk.length === 0) steps = 0
    else steps++
    
    res = Math.max(res, steps)
    stk.push([nums[i], steps])
  }  
   
   return res
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const totalSteps = function(nums) {
  let res = 0
  const stk = []
  for(const e of nums) {
    let steps = 1
    while(stk.length && e >= stk[stk.length - 1][0]) {
      const tmp = stk.pop()
      steps = Math.max(tmp[1] + 1, steps)
    }
    if(stk.length === 0) steps = 0
    else {
      res = Math.max(res, steps)
    }
    stk.push([e, steps])
  }
  return res
};


