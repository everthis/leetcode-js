/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxDistance = function(nums1, nums2) {
  let res = 0
  const m = nums1.length, n = nums2.length
  for(let i = 0; i < m; i++) {
    const idx = bSearch(nums2, i, n - 1, nums1[i])
    res = Math.max(res, idx - i)
  }
  return res
};

function bSearch(a, i, j, key) {
  while (i <= j) {
    let mid = (i + j) >>> 1
    if (key <= a[mid]) i = mid + 1
    else if(key > a[mid]) j = mid - 1
  }
  return i - 1
}
