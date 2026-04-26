/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let res = 0

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < nums[i - 1]) {
            let diff = nums[i - 1] - nums[i]
            res += diff
        }
    }

    return res
};
