/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
    const n = nums.length
    let res = -Infinity
    for(let i = 0; i < n; i++) {
      const x = nums[i]
      for(let j = i; j < n; j++) {
        const y = nums[j]
        if(Math.abs(x - y) <= Math.min(x, y) && (x ^ y) > res) {
          res = x ^ y
        }
      }
    }
    return res
};
