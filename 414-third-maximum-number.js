/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function(nums) {
    let count = 0, max=mid=small=Number.MIN_SAFE_INTEGER;
    for (let i in nums) {
        if (count > 0 && nums[i] === max || count > 1 && nums[i] === mid) continue;
        count++;
        if (nums[i] > max) {
            small = mid;
            mid = max;
            max = nums[i];
        } else if (nums[i] > mid) {
            small = mid;
            mid = nums[i];
        } else if (nums[i] > small) {
            small = nums[i];
        }
    }
    return count < 3 ? max : small;
};
