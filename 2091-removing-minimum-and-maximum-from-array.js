/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDeletions = function(nums) {
  let mi = Infinity, ma = -Infinity
  let mii = -1, mai = -1
  const { max, min, abs } = Math, n = nums.length
  for(let i = 0; i < n; i++) {
    const e = nums[i]
    if(e < mi) {
      mi = e
      mii = i
    }
    if(e > ma) {
      ma = e
      mai = i
    }
  }
  
  const disMi = abs(mii + 1, n - mii)
  const disMa = abs(mai + 1, n - mai)
  let res = 0
  let lmi = min(mii, mai), lma = max(mii, mai)
  
  res += min(lmi + 1 + n - lma, lma + 1, n - lmi)
  
  
  return res
};
