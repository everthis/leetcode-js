/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    let res = 1, i = 0, j;
    let sum = 0;
    nums.sort((a,  b) => a - b)
    for (j = 0; j < nums.length; ++j) {
        sum += nums[j];
        while (sum + k < nums[j] * (j - i + 1)) {
            sum -= nums[i];
            i += 1;
        }
        res = Math.max(res, j - i + 1);
    }
    return res;
};
