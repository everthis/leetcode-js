/**
 * @param {number[]} nums
 * @return {number}
 */
const countBadPairs = function (nums) {
  let cnt = 0
  const n = nums.length
  const mp = {}
  for (let i = 0; i < n; i++) {
    const prev = mp[i - nums[i]] || 0
    cnt += prev
    mp[i - nums[i]] = prev + 1
  }
  return (n * (n - 1)) / 2 - cnt
}
