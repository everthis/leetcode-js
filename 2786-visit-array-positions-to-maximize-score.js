/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const maxScore = function(nums, x) {
  let even = nums[0] + (nums[0] % 2 ? -x : 0)
  let odd = nums[0] + (nums[0] % 2 ? 0 : -x)
  
  const n = nums.length, { max } = Math
  for(let i = 1; i < n; i++) {
    const e = nums[i]
    if(e % 2 === 1) {
      odd = max(even - x, odd) + e
    } else {
      even = max(even, odd - x) + e
    }
  }
  
  return max(even, odd)
};
