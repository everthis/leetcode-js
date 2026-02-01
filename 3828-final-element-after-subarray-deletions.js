/**
 * @param {number[]} nums
 * @return {number}
 */
var finalElement = function(nums) {
    return Math.max(nums[0], nums.at(-1))
};
