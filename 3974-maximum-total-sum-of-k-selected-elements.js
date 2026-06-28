/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} mul
 * @return {number}
 */
var maxSum = function(nums, k, mul) {
    nums.sort((a, b) => b - a)
    let res = 0

    let i = 0
    while(k > 0) {
        if(mul > 0) {
            res += nums[i] * mul
        } else {
            res += nums[i]
        }

        if(mul > 0) mul--
        i++
        k--
    }


    return res
};
