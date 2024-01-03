/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxSubarrayLength = function(nums, k) {
  const n = nums.length, cnt = {}, {max} = Math
  let i = 0, res = 0
  for(let j = 0; j < n; j++) {
    const e = nums[j]
    if(cnt[e] == null) cnt[e] = 0
    cnt[e]++
    while(cnt[e] > k) {
      const tmp = nums[i]
      cnt[tmp]--
      i++
    }
    res = Math.max(res, j - i + 1)
  }

  return res
};
