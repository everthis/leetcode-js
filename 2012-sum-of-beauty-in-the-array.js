/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfBeauties = function(nums) {
  const n = nums.length
  const maxArr = Array(n).fill(0), minArr = Array(n).fill(0)
  let max = -Infinity, min = Infinity
  for(let i = 0; i < n; i++) {
    const tmp = Math.max(max, nums[i])
    if(tmp > max) max = tmp
    maxArr[i] = max
  }
  
  for(let i = n - 1; i >= 0; i--) {
    const tmp = Math.min(min, nums[i])
    if(tmp < min) min = tmp
    minArr[i] = min
  }
  let res = 0
  
  for(let i = 1; i < n - 1; i++) {
    if(nums[i] > maxArr[i - 1] && nums[i] < minArr[i + 1]) res += 2
    else if(nums[i] > nums[i - 1] && nums[i] < nums[i + 1]) res += 1
  }
  
  return res
};
