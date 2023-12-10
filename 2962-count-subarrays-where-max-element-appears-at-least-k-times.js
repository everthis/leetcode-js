/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const n = nums.length
  const mx = Math.max(...nums)
  const prefix = new Array(n + 2).fill(0)
  for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1] + (nums[i - 1] === mx ? 1 : 0)
  }
  let res = 0
  for (let i = 0; i < n; i++) {
    let l = i
    let r = n
    while (r - l > 1) {
      let mid = Math.floor((l + r) / 2)
      if (prefix[mid + 1] - prefix[i] < k) {
        l = mid
      } else {
        r = mid
      }
    }
    res += n - i
    if (l === i && k === 1 && nums[i] === mx) {
      continue
    }
    res -= l - i + 1
  }
  return res
}
