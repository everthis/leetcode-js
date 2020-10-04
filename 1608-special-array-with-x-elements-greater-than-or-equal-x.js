/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function (nums) {
    nums.sort((a, b) => b - a)
    let i = 0
    while(i < nums.length && nums[i] >= i) {
      i++
    }
    if(nums[i - 1] < i) return -1
    return i
};
