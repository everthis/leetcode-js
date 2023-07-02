/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
  let res = 0
  const n = nums.length
  for(let i = 0; i < n; i++) {
    const e = nums[i]
    let j = i, s = i
    if(e % 2 === 0 && e <= threshold) {
      j++
      while(true) {
        if(j >= n) break
        if(nums[j] > threshold) break
        if( (nums[j] % 2) === (nums[j - 1] % 2) ) break
        j++
      }
    }
    res = Math.max(res, j - i)
  }
  
  return res
};
