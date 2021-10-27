/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const kthSmallestSubarraySum = function(nums, k) {
  const sum = nums.reduce((ac, e) => ac + e, 0), n = nums.length
  let l = 0, r = sum
  while(l < r) {
    const mid = l + ((r - l) >> 1)
    let cnt = 0
    for(let i = 0, j = 0, tmp = 0; i < n; i++) {
      tmp += nums[i]
      while(tmp > mid) tmp -= nums[j++]
      cnt += i - (j - 1)
    }
    if (cnt < k) l = mid + 1
    else r = mid
  }
  return l
};
