/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
  const n = nums1.length
  let a = nums1[n - 1]
  let b = nums2[n - 1]

  let tmp0 = 0
  for (let i = 0; i < n - 1; i++) {
    const x = nums1[i]
    const y = nums2[i]

    if (Math.min(x, y) > Math.min(a, b)) return -1
    if (Math.max(x, y) > Math.max(a, b)) return -1

    if (y <= a && x <= b && (x > a || y > b)) {
      tmp0++
    }
  }

  a = nums2[n - 1]
  b = nums1[n - 1]
  let tmp1 = 0
  for (let i = 0; i < n - 1; i++) {
    const x = nums1[i]
    const y = nums2[i]

    if (Math.min(x, y) > Math.min(a, b)) return -1
    if (Math.max(x, y) > Math.max(a, b)) return -1

    if (y <= a && x <= b && (x > a || y > b)) {
      tmp1++
    }
  }

  return Math.min(tmp0, tmp1 + 1)
}
