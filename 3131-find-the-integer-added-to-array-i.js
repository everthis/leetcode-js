/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
  nums1.sort((a,b) => a - b)
  nums2.sort((a,b) => a - b)
  return nums2[0] - nums1[0]
};
