/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
const maxNumber = function(nums1, nums2, k) {
  const n = nums1.length
  const m = nums2.length
  let ans = new Array(k).fill(0)
  for (let i = Math.max(0, k - m); i <= k && i <= n; i++) {
    const candidate = merge(maxArray(nums1, i), maxArray(nums2, k - i), k)
    if (greater(candidate, 0, ans, 0)) ans = candidate
  }
  return ans
}

function merge(nums1, nums2, k) {
  const ans = new Array(k)
  for (let i = 0, j = 0, r = 0; r < k; r++) {
    ans[r] = greater(nums1, i, nums2, j) ? nums1[i++] : nums2[j++]
  }
  return ans
}

function greater(nums1, i, nums2, j) {
  while (i < nums1.length && j < nums2.length && nums1[i] === nums2[j]) {
    i++
    j++
  }
  return j === nums2.length || (i < nums1.length && nums1[i] > nums2[j])
}

function maxArray(nums, k) {
  const n = nums.length
  const ans = new Array(k)
  for (let i = 0, j = 0; i < n; i++) {
    while (n - i > k - j && j > 0 && ans[j - 1] < nums[i]) j--
    if (j < k) ans[j++] = nums[i]
  }
  return ans
}
