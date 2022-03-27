/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const set1 = new Set(nums1), set2 = new Set(nums2)
  const res = [new Set(), new Set()]
  for(let e of nums1) {
    if(set2.has(e)) continue
    else res[0].add(e)
  }
  for(let e of nums2) {
    if(set1.has(e)) continue
    else res[1].add(e)
  }
  res[0] = Array.from(res[0])
  res[1] = Array.from(res[1])
  return res
};
