/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const widestPairOfIndices = function(nums1, nums2) {
  const n = nums1.length
  const diff = Array(n).fill(0)
  let res = 0, sum1 = 0, sum2 = 0
  
  for(let i = 0; i < n; i++) {
    const cur1 = nums1[i], cur2 = nums2[i]
    sum1 += cur1
    sum2 += cur2
    if(sum1 === sum2) res = i + 1
    diff[i] = sum1 - sum2
  }
  const hash = {}
  for(let i = 0; i < n; i++) {
    const cur = diff[i]
    if(hash[cur] == null) hash[cur] = i
    else {
      res = Math.max(res, i - hash[cur])
    }
  }
  
  return res
};
