/**
 * @param {number[]} nums
 * @return {number}
 */
var countOperationsToEmptyArray = function(nums) {
    const pos = new Map()
    const n = nums.length
    let res = n

    for (let i = 0; i < n; ++i) {
        pos.set(nums[i], i)
    }

    nums.sort((a, b) => a - b)

    for (let i = 1; i < n; ++i) {
        if (pos.get(nums[i]) < pos.get(nums[i - 1])) {
            res += n - i
        }
    }

    return res
};
