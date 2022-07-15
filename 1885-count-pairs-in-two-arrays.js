/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const countPairs = function(nums1, nums2) {
  const n = nums1.length
  const arr = Array(n)
  for(let i = 0; i < n; i++) {
    arr[i] = nums1[i] - nums2[i]
  }
  // console.log(arr)
  arr.sort((a, b) => a - b)
   // console.log(arr)
  let res = 0
  for(let i = 0; i < n - 1; i++) {
    const e = arr[i]
    const target = -e + 1
    let l = i + 1, r = n
    while(l < r) {
      const mid = ((l + r) >> 1)
      if(valid(mid, target)) r = mid
      else l = mid + 1
    }
    // console.log(l)
    res += n - l
  }
  
  return res
  
  function valid(mid, t) {
    return arr[mid] >= t
  }
};
