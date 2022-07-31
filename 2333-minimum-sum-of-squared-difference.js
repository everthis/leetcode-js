/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
const minSumSquareDiff = function (nums1, nums2, k1, k2) {
  const n = nums1.length
  const diff = Array(n).fill(0)
  for (let i = 0; i < n; ++i) {
    diff[i] = Math.abs(nums1[i] - nums2[i])
  }
  const M = Math.max(...diff)
  const bucket = Array(M + 1).fill(0)
  for (let i = 0; i < n; i++) {
    bucket[diff[i]]++
  }
  let k = k1 + k2
  for (let i = M; i > 0 && k; i--) {
    if (bucket[i] > 0) {
      const minus = Math.min(bucket[i], k)
      bucket[i] -= minus
      bucket[i - 1] += minus
      k -= minus
    }
  }
  let res = 0
  for (let i = M; i > 0; --i) {
    res += bucket[i] * i * i
  }
  return res
}
