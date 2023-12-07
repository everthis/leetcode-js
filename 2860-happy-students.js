/**
 * @param {number[]} nums
 * @return {number}
 */
const countWays = function(nums) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  let res = 0, num = 0
  if(nums[0] !== 0) res = 1
  for(let i = 0; i < n; i++) {
    num++
    if(num > nums[i]) {
      if(i + 1 < n && num < nums[i + 1]) res++
      else if(i + 1 === n) res++
    }
  }
  return res
};
