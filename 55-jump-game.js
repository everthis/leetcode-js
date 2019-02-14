/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    const len = nums.length
    let maxIdx = 0
    for(let i = 0; i < len; i++) {
        if (i <= maxIdx) {
            maxIdx = Math.max(maxIdx, i + nums[i])
        } else {
            break
        }
    }
    return maxIdx >= len - 1 ? true : false
};
