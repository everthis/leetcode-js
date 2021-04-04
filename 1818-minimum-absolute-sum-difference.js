/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minAbsoluteSumDiff = function(nums1, nums2) {
  let sum = 0, lgDiff = -Infinity, idx = -1
  const mod = 10 ** 9 + 7
  const n = nums1.length, { min, max, abs } = Math 
  for(let i = 0; i < n; i++) {
    let tmp = abs(nums1[i] - nums2[i])
    if(tmp > lgDiff) lgDiff = tmp, idx = i
    sum = (sum + tmp) % mod
  }
    
  let res = sum, delta = lgDiff, t = Infinity
  for(let i = 0; i < n; i++) {
    if(i !== idx) {
      const t1 = abs(nums1[i] - nums2[idx])
      // const t2 = abs(nums2[i] - nums1[idx])
      const tmp = min(t1, lgDiff)
      if(tmp < t) t = tmp
    }
  }
  // console.log(sum, lgDiff, idx, t)
  return (sum - lgDiff + t) % mod
  
};
