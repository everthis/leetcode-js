/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperationsToMakeMedianK = function(nums, k) {
    nums.sort((a, b) => a - b)

    let n = nums.length
    let medIdx = Math.floor(n / 2)
    let res = 0

    for(let i = 0; i < n; i++) {
        if(nums[i] < k && medIdx <= i) {
            res = res + (k - nums[i])
        }
        else if(nums[i] > k && medIdx >= i) {
            res = res + (nums[i] - k)
        }
    }

    return res
};

