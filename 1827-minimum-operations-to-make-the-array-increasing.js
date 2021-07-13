/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function(nums) {
  let res = 0
  let pre = nums[0]
  for(let i = 1, n = nums.length; i < n; i++) {
    const e = nums[i]
    if(e <= pre) {
      res += pre - e + 1
      pre++
    } else {
      pre = e
    }
  }
  return res
};
