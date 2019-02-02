/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    const len = nums.length
    let r = false
    let ridx = 0
    if(len === 0) return -1
    if(nums[0] === target) return 0
    for(let i = 1; i < len; i++) {
        if(nums[i] === target) return i
        if(nums[i] < nums[i - 1]) {
          r = true
          ridx = i
          break
        }
    }
    
    if(r === true) {
       for(let i = len - 1; i >= ridx; i--) {
           if(nums[i] === target) return i
       }
    }
    
    return -1
};
