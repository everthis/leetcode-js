/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = function(nums, k) {
    const map = {0: -1}
    let runningSum = 0
    for(let i = 0; i < nums.length; i++) {
      runningSum += nums[i]
      if(k !== 0) runningSum %= k
      let prev = map[runningSum]
      if(prev != null) {
         if(i - prev > 1) return true
      } else {
        map[runningSum] = i
      }
    }
    return false
};

