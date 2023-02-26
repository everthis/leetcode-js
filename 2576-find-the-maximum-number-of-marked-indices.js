/**
 * @param {number[]} nums
 * @return {number}
 */
const maxNumOfMarkedIndices = function(nums) {
    let i = 0, n = nums.length;
    nums.sort((a, b) => a - b)
    for (let j = n - (~~(n / 2)); j < n; ++j) {
        i += 2 * nums[i] <= nums[j] ? 1 : 0;      
    }
    return i * 2;
};
