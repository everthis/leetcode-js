/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
    if(nums.length === 1) return nums[0]
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] - nums[i - 1] < 0) {
            return nums[i]
        }
    }
    return nums[0]
};
