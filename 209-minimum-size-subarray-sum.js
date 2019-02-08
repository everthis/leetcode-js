/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(s, nums) {
    let sum = 0, from = 0, win = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= s) {
            win = Math.min(win, i - from + 1);
            sum -= nums[from++];
        }
    }
    return (win === Number.MAX_SAFE_INTEGER) ? 0 : win;
};
