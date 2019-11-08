/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
const kSmallestPairs = function(nums1, nums2, k) {
  let len1 = nums1.length,
    len2 = nums2.length
  let arr = Array(len1).fill(0),
    resList = []
  while (k-- > 0) {
    let min = Infinity,
      index = -1,
      lastj = Infinity
    for (let i = 0; i < len1; i++) {
      const j = arr[i]
      if (j < lastj && j < len2) {
        const sum = nums1[i] + nums2[j]
        if (sum < min) {
          min = sum
          index = i
        }
        lastj = j
      }
    }
    if (index == -1) {
      break
    }
    resList.push([nums1[index], nums2[arr[index]]])
    arr[index]++
  }
  return resList
}
