/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maximumSetSize = function(nums1, nums2) {
  const n = nums1.length, {min} = Math
  const s1 = new Set(nums1), s2 = new Set(nums2)
  const common = new Set()
  for(const e of s1) {
    if(s2.has(e)) common.add(e)
  }
  const n1 = s1.size, n2 = s2.size, c = common.size
  return min(n, min(n1 - c, n / 2) + min(n2 - c, n / 2) + c)
};
