/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
const kthSmallestProduct = function(nums1, nums2, k) {
  const neg = nums1.filter(e => e < 0)  
  const pos = nums1.filter(e => e >= 0)
  const negRev = neg.slice(), posRev = pos.slice()
  negRev.reverse()
  posRev.reverse()

  let l = - (10 ** 10), r = 10 ** 10
  while(l < r) {
    const mid = l + Math.floor((r - l) / 2)
    if(fn(mid) < k) l = mid + 1
    else r = mid
  } 

  return l

  function fn(val) {
    let res = 0, n = nums2.length
    let l = 0, r = n - 1
    const list = val >= 0 ? negRev.concat(pos) : neg.concat(posRev)
    for(let e of list) {
      if(e < 0) {
        while(l < n && e * nums2[l] > val) l++
        res += n - l
      } else if (e === 0) {
        if(val >= 0) res += n
      } else {
        while(r >= 0 && e * nums2[r] > val) r--
        res += r + 1
      }
    }
    return res
  }
};
