/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minCapability = function(nums, k) {
  const n = nums.length
  let l = 1, r = 1e9
  while(l < r) {
    const mid = Math.floor((l + r) / 2)
    let cnt = 0
    for(let i = 0; i < n; i++) {
      if(nums[i] <= mid) {
        cnt++
        i++
      }
    }
    if(cnt >= k) r = mid
    else l = mid + 1
  }
  return l
};
