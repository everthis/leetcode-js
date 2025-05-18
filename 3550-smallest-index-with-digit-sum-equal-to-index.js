/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
  const n = nums.length
  
  for(let i = 0; i < n; i++) {
      if(dsum(nums[i]) === i) return i
  }
  
  return -1
};

function dsum(num) {
    let res = 0
    while(num) {
        const tmp = num % 10
        res += tmp
        num = Math.floor(num / 10)
    }
    
    return res
}
