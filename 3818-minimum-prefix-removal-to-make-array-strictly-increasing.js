/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPrefixLength = function(nums) {
    const n = nums.length
    let i = n - 1
    while(i > 0 && nums[i - 1] < nums[i]) i--
    return i
};
