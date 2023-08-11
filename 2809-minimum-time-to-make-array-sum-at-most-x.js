/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} x
 * @return {number}
 */
const minimumTime = function (nums1, nums2, x) {
  let n = nums1.length,
    s1 = 0,
    s2 = 0

  let ids = Array(n)
  for (let i = 0; i < n; i++) {
    ids[i] = i
    s1 += nums1[i]
    s2 += nums2[i]
  }

  ids.sort((i, j) => nums2[i] - nums2[j])

  let f = new Array(n + 1).fill(0)
  for (let i of ids) {
    for (let j = n; j > 0; j--) {
      f[j] = Math.max(f[j], f[j - 1] + nums1[i] + nums2[i] * j)
    }
  }

  for (let t = 0; t <= n; t++) {
    if (s1 + s2 * t - f[t] <= x) {
      return t
    }
  }
  return -1
}
