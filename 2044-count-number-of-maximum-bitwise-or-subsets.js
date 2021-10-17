/**
 * @param {number[]} nums
 * @return {number}
 */
const countMaxOrSubsets = function(nums) {
  let res = 0, max = 0, n = nums.length
  for(let num of nums) max |= num
  dfs(0, 0)
  dfs(0, nums[0])
  return res
  
  function dfs(i, cur) {
    if(i === n) return
    if(cur === max) return res += Math.pow(2, n - 1 - i)
    dfs(i + 1, cur)
    dfs(i + 1, cur | nums[i + 1])
  }
};
