/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaximumLength = function(nums) {
  const n = nums.length
  const stk = [0]
  const preSum = Array(n + 1).fill(0)
  const maxLen = Array(n + 1).fill(0)
  const last = Array(n + 1).fill(0)
  for(let i = 1; i <= n; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1]
  }
  // console.log(preSum)
  let stkPtr = 0
  last[0] = nums[0]
  for(let i = 1; i <= n; i++) {
    while(stkPtr < stk.length - 1 && preSum[stk[stkPtr + 1]] + last[stk[stkPtr + 1]] <= preSum[i]) stkPtr++
    const idx = stk[stkPtr]
    maxLen[i] = maxLen[idx] + 1
    last[i] = preSum[i] - preSum[idx]
    while(stk.length && preSum[stk.at(-1)] + last[stk.at(-1)] >= preSum[i] + last[i]) stk.pop()
    stk.push(i)
  }
  // console.log(maxLen)
  return maxLen[n]
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaximumLength = function(nums) {
   let res = 0
   const n = nums.length
   const stk = [[0,0,0]]
   let pre = 0
   for(let i = 0, j = 0; i < n; i++) {
     pre += nums[i]
     j = Math.min(j, stk.length - 1)
     while(j + 1 < stk.length && pre >= stk[j + 1][0]) j++
     const [val, preVal, preDp] = stk[j]
     const curDp = preDp + 1
     res = curDp
     const last = pre - preVal
     while(stk.length && stk.at(-1)[0] >= last + pre) stk.pop()
     stk.push([last + pre, pre, curDp])
   }

   return res
};
