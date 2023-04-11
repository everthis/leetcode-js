/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
const minimizeMax = function(nums, p) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let l = 0, r = nums.at(-1) - nums[0]
  
  while(l < r) {
    const mid = Math.floor(l + (r - l) / 2)
    let k = 0
    for(let i = 1; i < n;) {
      if(nums[i] - nums[i - 1] <= mid) {
        k++
        i += 2
      } else {
        i++
      }
    }
    
    if(k >= p) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  
  return l
};
