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
