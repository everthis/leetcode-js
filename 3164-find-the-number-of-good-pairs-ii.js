/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
  const freqMap = new Map()
  for (const num of nums2) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1)
  }

  let res = 0

  for (const num1 of nums1) {
    let factor = 1
    while (factor * factor <= num1) {
      if (num1 % factor === 0) {
        if (factor % k === 0 && freqMap.has(factor / k)) {
          res += freqMap.get(factor / k)
        }
        if (factor !== num1 / factor) {
          if ((num1 / factor) % k === 0 && freqMap.has(num1 / factor / k)) {
            res += freqMap.get(num1 / factor / k)
          }
        }
      }
      factor++
    }
  }

  return res 
};
