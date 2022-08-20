/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minProductSum = function(nums1, nums2) {
  nums1.sort((a, b) => a - b) 
  nums2.sort((a, b) => b - a)
  
  const n = nums1.length
  let res = 0
  for(let i = 0; i < n; i++) {
    res += nums1[i] * nums2[i]
  }
  
  return res
};
