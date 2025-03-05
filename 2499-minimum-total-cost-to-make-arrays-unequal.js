/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumTotalCost = function(nums1, nums2) {
  const n = nums1.length, {floor, max} = Math
  let res = 0
  const freq = new Map()
  let maxFreq = 0, maxFreqVal = 0, toSwap = 0
  for(let i = 0; i < n; i++) {
    if(nums1[i] === nums2[i]) {
        const e = nums1[i]
        freq.set(e, (freq.get(e) || 0) + 1)
        res += i
        const f = freq.get(e)
        toSwap++
        if(f > maxFreq) {
            maxFreqVal = e
        }
        maxFreq = max(maxFreq, f)
    }
  }

  for(let i = 0; i < n; i++) {
    if(maxFreq > floor(toSwap / 2) && nums1[i] !== nums2[i] && nums1[i] !== maxFreqVal && nums2[i] !== maxFreqVal) {
        toSwap++
        res += i
    }
  }

  if(maxFreq > floor(toSwap / 2)) return -1

  return res
};
