/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    const n = nums.length
    const arr = Array(n + 1).fill(0)
    for(const [l, r] of queries) {
        arr[l]++
        arr[r + 1]--
    }
    
    for(let i = 1; i <= n; i++) {
        arr[i] += arr[i - 1]
    }
    for(let i = 0; i < n; i++) {
        if(nums[i] > arr[i]) return false
    }
    
    return true
};
