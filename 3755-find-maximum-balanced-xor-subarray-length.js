/**
 * @param {number[]} nums
 * @return {number}
 */
var maxBalancedSubarray = function(nums) {
    const hash = {}
  let xor = 0, bal = 0, res = 0
  hash[k(0, 0)] = -1

  for(let i = 0; i < nums.length; i++) {
    const num = nums[i]
    xor ^= num
    if(num % 2 === 0) bal++
    else bal--
    if(hash[k(xor, bal)] != null) {
      let tmp = i - hash[k(xor, bal)]
      res = Math.max(res, tmp)
    } else {
      hash[k(xor, bal)] = i
    }
  }


  return res

  function k(xor, bal) {
    return `${xor},${bal}`
  }
};
