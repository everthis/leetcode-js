/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minChanges = function(nums, k) {
  const n = nums.length
  const arr = Array(1e5 + 1).fill(0)
  for(let i = 0; i < n /2; i++) {
    const a = nums[i], b = nums[n - 1 - i]
    const l = Math.min(a, b), r = Math.max(a, b)
    const maxDiff = Math.max(l, r, k - l)
    arr[0]--
    arr[r - l]--
    arr[r - l + 1]++
    arr[maxDiff + 1]++
  }
  let res = n, cur = n
  for(const e of arr) {
    cur += e
    res = Math.min(res, cur)
  }
  return res
};
