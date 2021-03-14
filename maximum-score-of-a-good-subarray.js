/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumScore = function(nums, k) {
  const n = nums.length
  let minVal = nums[k]
  let len = 1, ans = minVal * len, l = k - 1, r = k + 1
  while(l >= 0 || r < n) {
    len++
    let i = 0
    if(l < 0) {
      i = r
      r++
    } else if(r === n) {
      i = l
      l--
    } else if(nums[l] < nums[r]) {
      i = r
      r++
    } else {
      i = l
      l--
    }
    minVal = Math.min(minVal, nums[i])
    const tmp = minVal * len
    if(tmp > ans) ans = tmp
  }
  return ans
};
