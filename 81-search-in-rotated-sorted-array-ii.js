/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const search = function(nums, target) {
    const len = nums.length
    if(len === 0) return false
    if(nums[0] === target) return true
    if(target > nums[0]) {
       for(let i = 1; i < len; i++) {
           if(nums[i] === target) {
              return true
            } else {
                if(nums[i] < nums[i - 1]) return false
            }
       }
    } else {
      for(let i = len - 1; i >= 0; i--) {
           if(nums[i] === target) {
              return true
            } else {
                if(nums[i] < nums[i - 1]) return false
            }
       }
    }
    return false
};
