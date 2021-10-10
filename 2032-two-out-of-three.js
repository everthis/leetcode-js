/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
const twoOutOfThree = function(nums1, nums2, nums3) {
  const res = []
  const hash = {}
  for(let e of new Set(nums1)) {
    if(hash[e] == null) hash[e] = 0
    hash[e] = 1
  }

  for(let e of new Set(nums2)) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
  }
  

  for(let e of new Set(nums3)) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
  }
  
  Object.keys(hash).forEach(k => {
    if(hash[k] > 1) res.push(k)
  })

  
  return res
};
