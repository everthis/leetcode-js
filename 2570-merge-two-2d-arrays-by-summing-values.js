/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
  const map = new Map()
  for(const [id, val] of nums1) {
    if(!map.has(id)) map.set(id, 0)
    map.set(id, map.get(id) + val)
  }
  for(const [id, val] of nums2) {
    if(!map.has(id)) map.set(id, 0)
    map.set(id, map.get(id) + val)
  }
  const entries = [...map.entries()]
  entries.sort((a, b) => a[0] - b[0])
  return entries
};
