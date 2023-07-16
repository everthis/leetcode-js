/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
  const n  = nums.length
  let res = 0
  
  for(let i = 1; i <= n; i++) {
    if(n % i === 0) res += nums[i - 1] ** 2
  }
  
  return res
};
