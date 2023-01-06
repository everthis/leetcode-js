/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumOperations = function(nums) {
    const n = nums.length
    let left = nums[0], right = nums[n - 1]
    let cnt = 0;
    for (let i = 0, j = n - 1; i < j;) {
        if (left === right) {
            i++;
            j--;
            left = nums[i];
            right = nums[j];
        } else if (left < right) {
            i++;
            left += nums[i];
            cnt++;
        } else if (left > right) {
            j--;
            right += nums[j];
            cnt++;
        }
    }
    return cnt;
};
